import React, { useState } from 'react';
import { colors } from './colors';
import { typography } from './typography';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
	const [isLightTheme, setLightTheme] = useState(true);
	const toggleTheme = () => {
    setLightTheme(previousState => !previousState);
    AsyncStorage.setItem('theme', isLightTheme ? "true" : "false");
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
