import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Dimensions } from 'react-native';
import useThemedStyles from '../hooks/useThemeStyles';
const { height } = Dimensions.get('window');

const CustomPrompt = ({ visible, onClose, onSubmit, text, placeholder="enter a value" }) => {
	const [inputValue, setInputValue] = useState('');
	const theme = useTheme();
	const style = useThemedStyles(styles);

	const handleSubmit = () => {
		onSubmit(inputValue);
		setInputValue('');
		onClose();
	};

	return (
		<View
			style={[
				style.container,
				style.popUpBox,
				{ display: visible ? 'flex' : 'none' },
			]}>
			<Text style={[style.label, style.spacer]}>{text}</Text>
			<TextInput
				style={style.input}
				value={inputValue}
				onChangeText={setInputValue}
				placeholder={placeholder}
			/>
			<View style={style.buttonContainer}>
				<Button title="Cancel" onPress={onClose} />
				<Button title="Submit" onPress={handleSubmit} />
			</View>
		</View>
	);
};

const styles = theme =>
	StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: theme.colors.BACKGROUND,
			position: 'absolute',
      top: height / 3,
		},
		label: {
			color: theme.colors.TEXT,
			paddingTop: 0,
			paddingBottom: 15,
			fontSize: 20,
			fontWeight: 'bold',
		},
		spacer: {
			marginBottom: 20,
		},
		button: {
			padding: 10,
			borderRadius: 5,
			margin: 10,
			backgroundColor: theme.colors.SUCCESS,
		},
		input: {
			padding: 5,
			borderRadius: 5,
			margin: 10,
			marginBottom: 15,
			backgroundColor: theme.colors.INPUT,
			width: '75%',
			textAlignVertical: 'center',
      lineHeight: 20,
		},
		buttonContainer: {
			flexDirection: 'row',
			justifyContent: 'space-evenly',
			width: '100%',
		},
		popUpBox: {
			backgroundColor: theme.colors.BACKGROUND_TINT,
			padding: 20,
			borderRadius: 5,
			width: '80%',
		},
	});

export default CustomPrompt;
