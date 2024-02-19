import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export const CustomButton = ({ onPress, title, style, children = false }) => {
	return (
		<View>
			<TouchableOpacity onPress={onPress} style={style}>
				{
          children ? children : <Text>{title}</Text>
        }
			</TouchableOpacity>
		</View>
	);
};
