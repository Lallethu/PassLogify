import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useTheme from '../hooks/useTheme';
import useThemedStyles from '../hooks/useThemeStyles';

const AboutScreen = () => {
	const theme = useTheme();
	const style = useThemedStyles(styles);
	return (
		<View>
			<Text>AboutScreen</Text>
		</View>
	);
};

const styles = theme => StyleSheet.create({
  background: {
    backgroundColor: theme.colors.BACKGROUND
  },
});


export default AboutScreen;
