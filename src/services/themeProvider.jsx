import React, { useState, useEffect } from 'react';
import { colors } from '../constantes/colors';
import { typography } from '../constantes/typography';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
	const [isLightTheme, setLightTheme] = useState(() =>
		AsyncStorage.getItem('theme') === 'false' ? false : true,
	);

	useEffect(() => {
		AsyncStorage.getItem('theme')
			.then(value => {
				if (value === 'false') {
					setLightTheme(false);
				}
			})
			.catch(error => {
				console.log('Error retrieving theme from AsyncStorage:', error);
			});
	}, []);

	const toggleTheme = () => {
		setLightTheme(previousState => !previousState);
		AsyncStorage.setItem('theme', isLightTheme ? 'false' : 'true').catch(
			error => {
				console.log('Error saving theme to AsyncStorage:', error);
			},
		);
	};

	const theme = {
		colors: isLightTheme ? colors.light : colors.dark,
		typography,
		toggleTheme,
		isLightTheme,
	};

	return (
		<ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
	);
};

export default ThemeProvider;
