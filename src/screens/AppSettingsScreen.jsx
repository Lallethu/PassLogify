import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import useThemedStyles from '../test/useThemedStyled';
import useTheme from '../test/useTheme';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FakeBottomTab from '../components/FakeBottomTab';
import { useCreateEntry } from '../hooks/create-entry';

const AppSettingsScreen = () => {
	const currentTheme = AsyncStorage.getItem('theme');
	const { deleteAllEntries } = useCreateEntry();
	const theme = useTheme();
	const style = useThemedStyles(styles);

	const DeleteAllDataButton = () => {
		return (
			<>
				<TouchableOpacity
					style={[
						{
							backgroundColor: theme.colors.DANGER,
							...style.button,
							elevation: 8,
						},
					]}
					onPress={() => {
						deleteAllEntries();
					}}>
					<Text style={style.buttonText}>Delete all entries</Text>
				</TouchableOpacity>
			</>
		);
	};

	return (
		<>
			<View style={style.body}>
				<ScrollView style={{ width: '100%' }}>
					<View style={style.shortSection}>
						<Text style={style.text}>Switch themes</Text>
						<TouchableOpacity
							onPress={theme.toggleTheme}
							opacity={0.58}
							value={theme.isLightTheme}
							style={[
								{
									backgroundColor: theme.colors.SECONDARY,
									...style.button,
									elevation: 8,
								},
							]}>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'space-between',
									alignItems: 'center',
								}}>
								<Text
									style={[
										style.buttonText,
										{
											color: theme.isLightTheme
												? 'white'
												: 'darkslategrey',
										},
									]}>
									{theme.isLightTheme
										? 'Bravo six, going dark'
										: 'Let there be light'}
								</Text>
								<Image
									source={
										theme.isLightTheme
											? require('../assets/switchDark.png')
											: require('../assets/switchLight.png')
									}
									style={{ width: 30, height: 30 }}
								/>
							</View>
						</TouchableOpacity>
					</View>
					<View style={style.separator} />
					<View style={style.shortSection}>
						<DeleteAllDataButton />
					</View>
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
		header: {
			backgroundColor: theme.colors.PRIMARY,
			padding: 20,
			justifyContent: 'center',
			alignItems: 'center',
		},
		title: {
			color: theme.colors.PRIMARY,
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
		},
	});

export default AppSettingsScreen;
