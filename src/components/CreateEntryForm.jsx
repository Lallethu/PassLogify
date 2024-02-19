import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { CustomButton } from './CustomButton';
import { STYLES } from '../constantes/styles';
import {
	GestureHandlerRootView,
	TextInput,
} from 'react-native-gesture-handler';
import { useCreateEntry } from '../hooks/create-entry';
import { BRAND_COLORS } from '../constantes/colors';

const CreateEntryForm = () => {
	const { createEntry } = useCreateEntry();
	const [groupLabel, setGroupLabel] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<>
			<View>
				<View style={STYLES.card}>
					<Text style={[STYLES.title, {color: BRAND_COLORS.primary[700]}]}>CreateEntryForm</Text>
					<View style={STYLES.spacer} />
					<GestureHandlerRootView>
						<TextInput
							placeholder="Group Label"
							onChangeText={setGroupLabel}
						/>
						<TextInput
							placeholder="Username"
							textContentType="username"
							onChangeText={setUsername}
						/>
						<TextInput
							placeholder="Email"
							textContentType="emailAddress"
							onChangeText={setEmail}
						/>
						<TextInput
							placeholder="Password"
							textContentType="password"
							onChangeText={setPassword}
						/>
						<CustomButton
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
			</View>
		</>
	);
};

export default CreateEntryForm;
