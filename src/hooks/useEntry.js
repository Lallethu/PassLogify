import { Alert, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
	createEntryValidator,
	updateEntryValidator,
} from '../services/createEntryValidator';
import { useState } from 'react';

const useToastMessage = message => {
	ToastAndroid.showWithGravityAndOffset(
		message,
		ToastAndroid.LONG,
		ToastAndroid.BOTTOM,
		15,
		50,
	);
};

const orderBy = (arr, priority) => {
  return arr.sort((a, b) => {
    if (a[priority] < b[priority]) {
      return -1;
    }
    if (a[priority] > b[priority]) {
      return 1;
    }
    return 0;
  });
}

const createDataObject = data => {
	const dataGroup = {
		groupLabel: data.groupLabel,
		username: data.username,
		email: data?.email,
		password: data?.password,
    priority: data?.priority,
	};

	for (const key in dataGroup) {
		if (
			dataGroup[key] === undefined ||
			dataGroup[key] === '' ||
			dataGroup[key] === null ||
			dataGroup === true
		) {
			delete dataGroup[key];
		}
	}

	return dataGroup;
};

export const useEntry = () => {
	const [dataUser, setDataUser] = useState({});

	const getData = async () => {
		try {
			const keys = await AsyncStorage.getAllKeys();
			if (keys.length > 0) {
				const data = await AsyncStorage.multiGet(keys);
				const parsedData = data.map(login => {
					return JSON.parse(login[1]);
				});
				if (parsedData === true) {
					return;
				}
				if (parsedData.length > 0) {
          const orderedData = orderBy(parsedData, 'priority');
          return orderedData;
				}
			} else {
				return [];
			}
		} catch (e) {
			console.log(e);
		}
	};

	const deleteData = async key => {
		try {
			const keys = await AsyncStorage.getAllKeys();
			const entryKeys = keys.filter(k => k !== 'theme');
			const data = await AsyncStorage.multiGet(entryKeys);
			const parsedData = data.map(login => {
				return JSON.parse(login[1]);
			});
			const newData = parsedData.filter(data => data.groupLabel !== key);
			await AsyncStorage.multiRemove(entryKeys);
			newData.map(async data => {
				await AsyncStorage.setItem(
					data.groupLabel,
					JSON.stringify(data),
				);
			});

			ToastAndroid.showWithGravityAndOffset(
				'Entry deleted',
				ToastAndroid.LONG,
				ToastAndroid.BOTTOM,
				15,
				50,
			);
		} catch (e) {
			console.error(e);
		}
	};

	const createEntry = async ({ groupLabel, username, email, password }) => {
		try {
      const keys = await AsyncStorage.getAllKeys();
      const lengthExcludindKeyTheme = keys.filter(k => k !== 'theme').length + 1;
			const data = createDataObject({
				groupLabel,
				username,
				email,
				password,
        priority: lengthExcludindKeyTheme,
			});
			const validation = await createEntryValidator(
				data,
				useToastMessage,
			);
			if (!validation) {
				console.log('validation failed', validation);
				console.log('data', data);
				return;
			}
			await AsyncStorage.setItem(data.groupLabel, JSON.stringify(data));      
			useToastMessage('Data saved');
			setDataUser(data);
		} catch (e) {
			console.log(e);
		}
	};

	const deleteAllEntries = async () => {
		try {
			const keys = await AsyncStorage.getAllKeys();
			const entryKeys = keys.filter(key => key !== 'theme');

			if (entryKeys.length > 0) {
				const data = await AsyncStorage.multiGet(entryKeys);
				const parsedData = data.map(login => {
					return JSON.parse(login[1]);
				});

				if (parsedData.length > 0) {
					Alert.alert(
						'Are you sure?',
						'This will delete all your entries. This action cannot be undone.',
						[
							{
								text: 'Cancel',
								onPress: () => console.log('Cancel Pressed'),
								style: 'cancel',
							},
							{
								text: 'Yes, delete everything',
								onPress: async () => {
									await AsyncStorage.multiRemove(entryKeys);
									ToastAndroid.showWithGravityAndOffset(
										'All entries deleted',
										ToastAndroid.LONG,
										ToastAndroid.BOTTOM,
										15,
										50,
									);
								},
							},
						],
						{ cancelable: true },
					);
				}
			} else {
				ToastAndroid.showWithGravityAndOffset(
					'No entries to dump',
					ToastAndroid.LONG,
					ToastAndroid.BOTTOM,
					15,
					50,
				);
			}
		} catch (e) {
			console.error(e);
		}
	};

	// update entry is used for now just to change the groupLabel
	const updateEntry = async (oldGroupLabel, newGroupLabel) => {
		try {
			const keys = await AsyncStorage.getAllKeys();
			const entryKeys = keys.filter(k => k !== 'theme');
			const validation = await updateEntryValidator(
				{ groupLabel: newGroupLabel, oldGroupLabel },
				useToastMessage,
			);
			if (!validation) {
				return;
			}
			const data = await AsyncStorage.multiGet(entryKeys);
			const parsedData = data.map(login => {
				return JSON.parse(login[1]);
			});
			const newData = parsedData.map(data => {
				if (data.groupLabel === oldGroupLabel) {
					data.groupLabel = newGroupLabel;
				}
				return data;
			});
			await AsyncStorage.multiRemove(entryKeys);
			newData.map(async data => {
				await AsyncStorage.setItem(
					data.groupLabel,
					JSON.stringify(data),
				);
			});
			ToastAndroid.showWithGravityAndOffset(
				'Entry updated',
				ToastAndroid.LONG,
				ToastAndroid.BOTTOM,
				15,
				50,
			);
		} catch (e) {
			console.error(e);
		}
	};

	return {
		getData,
		deleteAllEntries,
		deleteData,
		createEntry,
		updateEntry,
	};
};
