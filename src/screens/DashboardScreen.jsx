import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FakeBottomTab from '../components/FakeBottomTab';
import { useCreateEntry } from '../hooks/create-entry';
import { useFocusEffect } from '@react-navigation/core';
import useTheme from '../hooks/useTheme';
import useThemedStyles from '../hooks/useThemeStyles';
import ExpendableLoginCard from '../components/ExpendableLoginCard';

const DashboardScreen = () => {
	const theme = useTheme();
	const style = useThemedStyles(styles);
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
	const FakeModal = ({ container }) => {
		const [modalVisible, setModalVisible] = useState(true);

		const closeModal = () => {
			setModalVisible(false);
			delete this;
		};

		return (
			<View style={[{ ...container }]}>
				{modalVisible && (
					<View
						style={[
							style.card,
							{
								backgroundColor: theme.colors.BACKGROUND_TINT,
								color: theme.colors.TEXT,
							},
						]}>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
							}}>
							<Text
								style={[
									style.title,
									{ color: theme.colors.TEXT, padding: 10 },
								]}>
								Dashboard
							</Text>
							<Text
								style={[
									style.title,
									{
										textAlign: 'right',
										padding: 10,
										textTransform: 'uppercase',
										color: theme.colors.TEXT,
									},
								]}
								onPress={closeModal}>
								x
							</Text>
						</View>
						<View style={style.spacer} />
						<Text
							style={[
								style.text,
								{
									padding: 14,
								},
							]}>
							Here you'll find all your{' '}
							<Text style={{ color: theme.colors.PRIMARY[500] }}>
								logins
							</Text>{' '}
							stored and well organized!
						</Text>
					</View>
				)}
			</View>
		);
	};

	return (
		<>
			<FakeModal
				container={{ backgroundColor: theme.colors.BACKGROUND }}
			/>
			<View
				style={[
					style.container,
					{ backgroundColor: theme.colors.BACKGROUND },
				]}>
				<ScrollView style={{ width: '100%' }}>
					{listOfLogins.length > 0 ? (
						listOfLogins.map((login, index) => (
							<ExpendableLoginCard
								{...{ login, index, styleFromTheme: style }}
							/>
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

const styles = theme =>
	StyleSheet.create({
		body: {
			flex: 1,
			backgroundColor: theme.colors.BACKGROUND,
			justifyContent: 'space-evenly',
			alignItems: 'center',
			padding: 20,
		},
		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
		},
		header: {
			backgroundColor: theme.colors.PRIMARY,
			padding: 20,
			justifyContent: 'center',
			alignItems: 'center',
		},
		card: {
			backgroundColor: theme.colors.CARD,
			padding: 10,
			borderRadius: 5,
			margin: 10,
		},
		expendableCard: {
			backgroundColor: theme.colors.CARD,
			padding: 10,
			borderRadius: 5,
			margin: 10,
			flexDirection: 'column',
			justifyContent: 'flex-start',
			alignItems: 'left',
			width: '80%',
		},
		title: {
			color: theme.colors.TITLE,
			fontSize: theme.typography.size.L,
			letterSpacing: theme.typography.letterSpacing.M,
			fontWeight: 'bold',
		},
		shortSection: {
			flexDirection: 'column',
			justifyContent: 'flex-start',
			alignItems: 'left',
			width: '80%',
		},
		text: {
			color: theme.colors.TEXT,
			fontSize: theme.typography.size.M,
			letterSpacing: theme.typography.letterSpacing.S,
			textAlign: 'justify',
		},
		referralCode: {
			color: theme.colors.TEXT_SECONDARY,
			fontSize: theme.typography.size.S,
			letterSpacing: theme.typography.letterSpacing.L,
			fontWeight: 'bold',
		},
		button: {
			padding: 10,
			borderRadius: 5,
			margin: 10,
		},
		separator: {
			borderBottomColor: theme.colors.BORDER,
			borderBottomWidth: 1,
			width: '100%',
			margin: 10,
			opacity: 0.5,
		},
		spacer: {
			margin: 10,
			borderBottomWidth: 1,
			borderColor: theme.colors.BORDER,
		},
		cardTitle: {
			color: theme.colors.TITLE,
			fontSize: theme.typography.size.L,
			letterSpacing: theme.typography.letterSpacing.M,
			fontWeight: 'bold',
		},
		spacerNoMargin: {
			margin: 0,
			borderBottomWidth: 1,
			borderColor: theme.colors.BORDER,
		},
		spacerHorizontal: {
			...styles.spacer,
			marginVertical: 0,
			marginHorizontal: 5,
			borderBottomWidth: 1,
			borderColor: theme.colors.BORDER,
		},
		spacerVertical: {
			...styles.spacer,
			marginHorizontal: 0,
			marginBottom: 15,
			borderBottomWidth: 1,
			borderColor: theme.colors.BORDER,
		},
	});

export default DashboardScreen;
