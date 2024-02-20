import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CustomButton } from './CustomButton';
import { useNavigation } from '@react-navigation/core';
import useTheme from '../hooks/useTheme';
import useThemedStyles from '../hooks/useThemeStyles';

export const FakeHeader = () => {
	const theme = useTheme();
	const style = useThemedStyles(styles);
	const navigation = useNavigation();
	const handleNavigateToDashboard = () => {
		navigation.navigate('Dashboard');
	};

	return (
		<View style={style.container}>
			<CustomButton
				onPress={handleNavigateToDashboard}
				style={[
					style.button,
					{ backgroundColor: theme.colors.BACKGROUND_TINT },
				]}>
				<Text style={{ color: theme.colors.TEXT }}>Go back</Text>
			</CustomButton>
		</View>
	);
};

const styles = theme =>
	StyleSheet.create({
		container: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			padding: 10,
			backgroundColor: theme.colors.BACKGROUND,
		},
		title: {
			fontSize: 18,
			fontWeight: 'bold',
		},
		button: {
			padding: 10,
			borderRadius: 5,
			margin: 10,
			maxWidth: 65,
		},
	});
