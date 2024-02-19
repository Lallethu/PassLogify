import { ToastAndroid } from 'react-native';
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

	return {
		getData,
		deleteData,
		createEntry,
	};
};