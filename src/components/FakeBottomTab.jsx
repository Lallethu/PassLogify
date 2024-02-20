import React, { useCallback, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import useTheme from '../hooks/useTheme';
import useThemedStyles from '../hooks/useThemeStyles';

const FakeBottomTab = ({ route }) => {
	const theme = useTheme();
	const style = useThemedStyles(styles);
	const navigation = useNavigation();
	const [currentRoute, setCurrentRoute] = useState(route);

	const handleNavigate = route => {
		setCurrentRoute(route);
		navigation.navigate(route);
	};

	useFocusEffect(
		useCallback(() => {
			setCurrentRoute(route);
		}, []),
	);

	return (
		<View style={style.tabContainer}>
			<TouchableOpacity
				style={style.tab}
				onPress={() => handleNavigate('Manage')}>
				<Image
					style={style.tab.img}
					source={require('../assets/background.png')}
				/>
				<Text
					style={
						currentRoute === 'Manage'
							? [style.tabText, style.tabTextActive]
							: style.tabText
					}>
					Manage entry
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={style.tab}
				onPress={() => handleNavigate('Create')}>
				<Image
					style={style.tab.img}
					source={require('../assets/background.png')}
				/>
				<Text
					style={[
						currentRoute === 'Create'
							? [style.tabText, style.tabTextActive]
							: style.tabText,
					]}>
					Create entry
				</Text>
			</TouchableOpacity>
			<TouchableOpacity style={style.tab}>
				<Image
					style={style.tab.img}
					source={require('../assets/background.png')}
				/>
				<Text style={style.tabText}>SURPRISE</Text>
			</TouchableOpacity>
		</View>
	);
};

// might, in the future change the styles to a more themed approach
const styles = theme =>
	StyleSheet.create({
		tabContainer: {
			flexDirection: 'row',
			justifyContent: 'space-around',
			alignItems: 'center',
			backgroundColor: theme.colors.BACKGROUND,
			borderTopWidth: 1,
			borderTopColor: theme.colors.BORDER,
			paddingBottom: 10,
		},
		tab: {
			flex: 1,
			alignItems: 'center',
			paddingTop: 10,
			img: {
				width: 20,
				height: 20,
			},
		},
		tabText: {
			fontSize: 16,
			fontWeight: 'bold',
			color: theme.colors.TEXT_SECONDARY,
		},
		tabTextActive: {
			color: theme.colors.TEXT,
		},
	});

export default FakeBottomTab;
