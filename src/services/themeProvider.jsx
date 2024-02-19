import React, { createContext } from 'react';
import { colors } from '../constantes/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
	const isLigthTheme = true; // TODO: get theme from async storage

	const theme = {
		colors: isLigthTheme ? colors.LightTheme : colors.DarkTheme,
		typographies: colors.Typographies,
	};

	return (
		<ThemeContext.Provider value={{ theme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export default ThemeProvider;
