import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
	BRAND_COLORS,
	NEUTRALS,
	SUPPORTING_COLORS,
} from '../constantes/colors';
import { STYLES } from '../constantes/styles';
import { LightTheme, DarkTheme } from '../constantes/theme';

const AppSettingsScreen = () => {
  // TEMPORARY waiting feature to be implemented: <feature theme-switcher>
  const [toggle, setToggle] = useState(false);
	const ToggleThemeButton = () => {

		const toggleTheme = () => {
			setToggle(!toggle);
			console.log('Theme toggled');
			console.log('=====================');
			console.log('toggle state: ', toggle);
			console.log('=====================');
			console.log('Feature not implemented yet');
		};

		return (
			<TouchableOpacity
				activeOpacity={0.58}
				onPress={toggleTheme}
				style={[
					{
						backgroundColor: toggle
							? BRAND_COLORS.primary[500]
							: NEUTRALS.gray[200],
						...STYLES.button,
            elevation: toggle ? 0 : 5,
					},
				]}>
				<Text
					style={[
						STYLES.buttonText,
						{
							color: toggle
								? NEUTRALS.white
								: BRAND_COLORS.primary[500],
						},
					]}>
					Toggle Theme
				</Text>
			</TouchableOpacity>
		);
	};

	return (
		<View style={STYLES.container}>
			<Text style={[STYLES.title, { color: BRAND_COLORS.primary[500] }]}>
				App Settings
			</Text>
			<View style={STYLES.spacer} />
			<ToggleThemeButton />
			<View style={STYLES.spacer} />
			<TouchableOpacity
				activeOpacity={0.58}
				onPress={() => console.log('Feature not implemented yet')}
				style={[
					STYLES.button,
					{
						backgroundColor: SUPPORTING_COLORS.danger[400],
						color: NEUTRALS.white,
            elevation: 5,
					},
				]}>
				<Text style={STYLES.buttonText}>Dump data :(</Text>
			</TouchableOpacity>
		</View>
	);
};

export default AppSettingsScreen;
