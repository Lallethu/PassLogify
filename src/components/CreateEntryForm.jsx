import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CustomButton } from './CustomButton';
import {
	GestureHandlerRootView,
	TextInput,
} from 'react-native-gesture-handler';
import { useEntry } from '../hooks/useEntry';
import useTheme from '../hooks/useTheme';
import useThemedStyles from '../hooks/useThemeStyles';

const CreateEntryForm = () => {
	const theme = useTheme();
	const style = useThemedStyles(styles);
	const { createEntry } = useEntry();
	const [groupLabel, setGroupLabel] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<View style={style.form}>
			<View style={style.spacer} />
			<GestureHandlerRootView>
				<Text style={style.label}>Create Entry</Text>
				<Text style={style.information}>
					<Text
						style={{
							color: theme.colors.DANGER,
							fontWeight: 'bold',
						}}>
						*
					</Text>
					{': '}
					Required fields
				</Text>
				<Text style={style.information}>
					<Text
						style={{
							color: theme.colors.WARNING,
							fontWeight: 'bold',
						}}>
						*
					</Text>
					{': '}
					At least one of the following fields is required
				</Text>
				<View style={style.input}>
					<Text>
						Group label
						<Text style={{ color: theme.colors.DANGER }}>*</Text>
					</Text>
					<TextInput
						placeholder="e.g. Facebook, Google, etc."
						onChangeText={setGroupLabel}
					/>
				</View>

				<View style={style.input}>
					<Text>
						Email
						<Text style={{ color: theme.colors.WARNING }}>*</Text>
					</Text>
					<TextInput
						placeholder="e.g. JohnDoe@mail.com"
						onChangeText={setEmail}
					/>
				</View>

				<View style={style.input}>
					<Text>
						Username
						<Text style={{ color: theme.colors.WARNING }}>*</Text>
					</Text>
					<TextInput
						placeholder="e.g. JohnDoe"
						onChangeText={setUsername}
					/>
				</View>

				<View style={style.input}>
					<Text>
						Password
						<Text style={{ color: theme.colors.DANGER }}>*</Text>
					</Text>
					<TextInput
						placeholder="e.g. Password123"
						onChangeText={setPassword}
					/>
				</View>

				<CustomButton
					titleStyle={[
						{
							color: theme.colors.TEXT_TINT,
							textAlign: 'center',
						},
					]}
					style={[
						style.button,
						{ color: theme.colors.TEXT, elevation: 8 },
					]}
					onPress={() => {
						createEntry({
							groupLabel,
							username,
							email,
							password,
						});
					}}
					title="Save"
				/>
			</GestureHandlerRootView>
		</View>
	);
};

const styles = theme =>
	StyleSheet.create({
		form: {
			padding: 20,
			backgroundColor: theme.colors.BACKGROUND_TINT,
			borderRadius: 5,
			width: '80%',
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
			padding: 10,
			paddingBottom: 0,
			borderRadius: 5,
			margin: 10,
			backgroundColor: theme.colors.INPUT,
		},
		information: {
			color: theme.colors.TEXT,
			paddingBottom: 5,
		},
	});

export default CreateEntryForm;
