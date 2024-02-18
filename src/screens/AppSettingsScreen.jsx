import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, useColorScheme, PressableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { BRAND_COLORS, NEUTRALS } from '../constantes/colors';
import { STYLES } from '../constantes/styles';
import { LightTheme, DarkTheme } from '../constantes/theme';

const ToggleThemeButton = () => {
  const { colors } = useTheme();
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? LightTheme : DarkTheme;
  const toggleTheme = async () => {
    try {
      await AsyncStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <PressableOpacity
      style={{
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: 5,
        margin: 10,
      }}
      onPress={toggleTheme}>
      <Text style={{ color: NEUTRALS.white[100] }}>
        {isDarkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      </Text>
    </PressableOpacity>
  );
};


const AppSettingsScreen = () => {
	return (
    <View style={STYLES.container}>
      <Text style={STYLES.text}>App Settings</Text>
      <ToggleThemeButton />
    </View>
	);
};

export default AppSettingsScreen;
