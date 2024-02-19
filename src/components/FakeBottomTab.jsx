import React, { useCallback } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { BRAND_COLORS } from '../constantes/colors';

const FakeBottomTab = ({ route }) => {
	const navigation = useNavigation();
	const [currentRoute, setCurrentRoute] = React.useState(route);

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
		<View style={styles.tabContainer}>
			<TouchableOpacity
				style={styles.tab}
				onPress={() => handleNavigate('Manage')}>
				<Image
					style={styles.tab.img}
					source={require('../assets/background.png')}
				/>
				<Text
					style={
						currentRoute === 'Manage'
							? [styles.tabText, styles.tabTextActive]
							: styles.tabText
					}>
					Manage entry
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.tab}
				onPress={() => handleNavigate('Create')}>
				<Image
					style={styles.tab.img}
					source={require('../assets/background.png')}
				/>
				<Text
					style={[
						currentRoute === 'Create'
							? [styles.tabText, styles.tabTextActive]
							: styles.tabText,
					]}>
					Create entry
				</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.tab}>
				<Image
					style={styles.tab.img}
					source={require('../assets/background.png')}
				/>
				<Text style={styles.tabText}>SURPRISE</Text>
			</TouchableOpacity>
		</View>
	);
};

// might, in the future change the styles to a more themed approach
const styles = StyleSheet.create({
	tabContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: '#fff',
		borderTopWidth: 1,
		borderTopColor: '#ccc',
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
		color: '#333',
	},
	tabTextActive: {
		color: BRAND_COLORS.primary[700],
	},
});

export default FakeBottomTab;
