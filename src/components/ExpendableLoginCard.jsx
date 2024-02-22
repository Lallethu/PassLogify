import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ExpendableLoginCard = ({ login, index, styleFromTheme, children }) => {
	let [visible, setVisible] = useState(false);

	const switchVisible = () => {
		setVisible(!visible);
	};

	const deleteEmptyKeys = obj => {
		Object.keys(obj).forEach(key => {
			if (obj[key] === '') {
				delete obj[key];
			}
		});

		if (Object.keys(obj).length === 0) {
			return false;
		}

		return true;
	};

	const oneOrBoth = login => (
		<>
			{login.username && (
				<Text style={[styleFromTheme.text]}>
					Username: {login.username}
				</Text>
			)}
			{login.email && (
				<Text style={[styleFromTheme.text]}>Email: {login.email}</Text>
			)}
		</>
	);

	return (
		<>
			{deleteEmptyKeys(login) && (
				<View style={styleFromTheme.card}>
					<TouchableOpacity
						onPress={() => {
							switchVisible();
						}}>
						<Text
							style={[styleFromTheme.text, styleFromTheme.title]}>
							{login.groupLabel}
						</Text>
					</TouchableOpacity>

					<View style={[{ display: visible ? 'flex' : 'none' }]}>
						<Text style={styleFromTheme.spacerVertical} />
						<View style={{ padding: 10 }}>
							{oneOrBoth(login)}
							<Text style={[styleFromTheme.text]}>
								Password: {login.password}
							</Text>
              {children}
						</View>
					</View>
				</View>
			)}
		</>
	);
};

export default ExpendableLoginCard;
