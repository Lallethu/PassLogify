import React, { useCallback, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { STYLES } from '../constantes/styles';
import { BRAND_COLORS } from '../constantes/colors';
import { ScrollView } from 'react-native-gesture-handler';
import FakeBottomTab from '../components/FakeBottomTab';
import { useCreateEntry } from '../hooks/create-entry';
import { useFocusEffect } from '@react-navigation/core';

const DashboardScreen = () => {
	const [listOfLogins, setListOfLogins] = useState([]);
	const { getData } = useCreateEntry();

  // might be a good idea to move this to a custom hook or util function
	const fetchData = async () => {
		try {
			const data = await getData();
			if (data) {
				setListOfLogins(data);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useFocusEffect(
		useCallback(() => {
			fetchData();
		}, []),
	);

  // definitely a good idea to move this to a custom component
	const FakeModal = () => {
		const [modalVisible, setModalVisible] = useState(true);

		const closeModal = () => {
			setModalVisible(false);
			delete this;
		};

		return (
			<>
				{modalVisible && (
					<View style={STYLES.card}>
						<Text
							style={{
								textAlign: 'right',
								textTransform: 'uppercase',
							}}
							onPress={closeModal}>
							x
						</Text>
						<Text style={STYLES.title}>Dashboard</Text>
						<View style={STYLES.spacer} />
						<Text style={STYLES.text}>
							Here you'll find all your{' '}
							<Text style={{ color: BRAND_COLORS.primary[500] }}>
								logins
							</Text>{' '}
							stored and well organized!
						</Text>
					</View>
				)}
			</>
		);
	};

	return (
		<>
			<FakeModal />
			<View style={STYLES.container}>
				<ScrollView>
					{(listOfLogins.length > 0) ? (
						listOfLogins.map((login, index) => (
              // definitely a good idea to move this to a custom component made to be mapped over
							<View key={index} style={STYLES.card}>
								<Text style={STYLES.title}>
									{login.groupLabel}
								</Text>
								<Text>Username: {login.username}</Text>
								<Text>Email: {login.email}</Text>
								<Text>Password: {login.password}</Text>
							</View>
						))
					) : (
						<Text>No logins yet :)</Text>
					)}
				</ScrollView>
			</View>
			<FakeBottomTab />
		</>
	);
};

export default DashboardScreen;
