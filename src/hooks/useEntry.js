import { Alert, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createEntryValidator, updateEntryValidator } from '../services/createEntryValidator';
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

const createDataObject = data => {
	const dataGroup = {
		groupLabel: data.groupLabel,
		username: data.username,
		email: data?.email,
		password: data?.password,
	};

	for (const key in dataGroup) {
		if (dataGroup[key] === undefined || dataGroup[key] === '' || dataGroup[key] === null || dataGroup === true) {
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
					return parsedData;
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
			await AsyncStorage.removeItem(key);
			const value = await AsyncStorage.getItem(key);
			if (value === null) {
				useToastMessage('Data deleted');
				setDataUser({});
			} else {
				useToastMessage('No data found');
			}
		} catch (e) {
			console.log(e);
		}
	};

	const createEntry = async ({ groupLabel, username, email, password }) => {
		try {
			const data = createDataObject({
				groupLabel,
				username,
				email,
				password,
			});
			const validation = createEntryValidator(data, useToastMessage);
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

	const updateEntry = async (key, data, oldData) => {
		try {
      const newData = createDataObject(data);
      const validation = updateEntryValidator(newData, oldData, useToastMessage);
      if (!validation) {
        console.log('validation failed', validation);
        console.log('data', newData);
        return;
      }
      await AsyncStorage.setItem(key, JSON.stringify(newData));
      useToastMessage('Data updated');
      setDataUser(newData);
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
