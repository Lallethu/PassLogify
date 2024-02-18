import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Button, ToastAndroid } from 'react-native';
import { STYLES } from '../constantes/styles';
import FakeBottomTab from '../components/FakeBottomTab';

const TestScreen = () => {
	const KEY = 'user_data';
	const [dataUser, setDataUser] = useState({});
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

	const getData = async () => {
		try {
			// try to getAllKeys
      const keys = await AsyncStorage.getAllKeys();
      console.log('keys: ', keys);
      // if there are keys, get the data
      if (keys.length > 0) {
        const data = await AsyncStorage.multiGet(keys);
        console.log('data: ', data);
        // if there is data, set the state
        if (data.length > 0) {
          setDataUser(JSON.parse(data[0][1]));
        } else {
          setDataUser({});
        }
      } else {
        setDataUser({});
      }
		} catch (e) {
			console.log(e);
		}
	};

	const deleteData = async key => {
		try {
			await AsyncStorage.removeItem(key);
			const value = await AsyncStorage.getItem(key);
			// if the data has been successfully deleted, value should be null and a message should be displayed
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

	const saveData = async ({ groupLabel, username, email, password }) => {
		try {
			/*
    actual schema
    key: user_data
    value: {groupLabel: data.groupLabel, username: data?.username, email: data?.email, password: data.password}

    desired schema
    key: groupLabel
    value: {groupLabel: data.groupLabel, username: data?.username, email: data?.email, password: data.password}
    */
			const data = createDataObject({
				groupLabel,
				username,
				email,
				password,
			});
      await AsyncStorage.setItem(data.groupLabel, JSON.stringify(data));
			console.log('on save: ', data);
			useToastMessage('Data saved');
			setDataUser(data);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<>
			<View style={STYLES.spacer} />
			<View>
				<Button
					title="Save Data"
					onPress={async () => {
						saveData({
							groupLabel: 'youtube',
							email: 'test@mail.com',
							username: 'test',
							password: 'password',
						});
					}}
				/>
				<View style={[STYLES.spacer, STYLES.card]} />
				<Button
					title="Get Data"
					onPress={async () => {
						getData();
					}}
				/>
			</View>

			<View style={STYLES.spacer} />
			<View style={STYLES.container}>
				<View style={STYLES.card}>
					{dataUser.groupLabel && (
						<>
							<Text>Group: {dataUser.groupLabel}</Text>
							{dataUser.username && (
								<Text>Username: {dataUser.username}</Text>
							)}
							{dataUser.email && (
								<Text>Email: {dataUser.email}</Text>
							)}
							<Text>Password: {dataUser.password}</Text>
						</>
					)}
				</View>
			</View>

			<View style={STYLES.spacer} />

			<View style={STYLES.container}>
				<Button
					title="Delete Data"
					onPress={async () => {
						deleteData("youtube");
					}}
				/>
			</View>
      <FakeBottomTab />
		</>
	);
};

export default TestScreen;
