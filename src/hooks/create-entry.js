import { Alert, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createEntryValidator } from '../services/createEntryValidator';
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
		if (dataGroup[key] === undefined) {
			delete dataGroup[key];
		}
	}

	return dataGroup;
};

export const useCreateEntry = () => {
	const [dataUser, setDataUser] = useState({});

	const getData = async () => {
		try {
			const keys = await AsyncStorage.getAllKeys();
			if (keys.length > 0) {
				const data = await AsyncStorage.multiGet(keys);
				const parsedData = data.map(login => {
					return JSON.parse(login[1]);
				});
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
									console.log(parsedData);
									await AsyncStorage.multiRemove(entryKeys);
								},
							},
						],
						{ cancelable: true },
					);
				}
			} else {
				console.log('No entries to dump');
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

	return {
		getData,
		deleteAllEntries,
		deleteData,
		createEntry,
	};
};
