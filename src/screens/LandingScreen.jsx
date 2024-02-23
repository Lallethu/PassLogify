import React, { useRef, useState } from 'react';
import {
	View,
	Image,
	StyleSheet,
	Dimensions,
	PanResponder,
	Text,
} from 'react-native';
import useThemedStyles from '../hooks/useThemeStyles';
import { useTheme } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen');

const LandingScreen = ({ navigation }) => {
	const theme = useTheme();
	const style = useThemedStyles(styles);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const panResponder = useRef(
		PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onPanResponderMove: (evt, gestureState) => {
				setPosition({
					x: 0,
					y: gestureState.dy,
				});
			},
			onPanResponderRelease: (evt, gestureState) => {
				const { dy } = gestureState;
				const imgHeight = height / 2;
				if (dy < -imgHeight / 2 || dy > imgHeight / 2) {
					redirectToDashboard();
				}

				setPosition({ x: 0, y: 0 });
			},
		}),
	).current;

	const redirectToDashboard = () => {
		navigation.navigate('Dashboard');
	};

	return (
		<View style={style.mainContainer}>
			<View style={style.targetArea}>
				<Image
					style={style.target}
					source={require('../assets/targetZone.png')}
					resizeMode="contain"
				/>
			</View>
			<Text style={{color: style.textTarget.color }}>Unlock 🔓</Text>
			<View style={style.container} {...panResponder.panHandlers}>
				<Image
					style={[
						style.logo,
						{
							transform: [{ translateY: position.y }],
						},
					]}
					source={require('../assets/logo.png')}
					resizeMode="contain"
				/>
			</View>
			<Text style={style.textTarget}>
				↕️ Slide the logo up or down to unclock
			</Text>
		</View>
	);
};

export default LandingScreen;

const styles = theme =>
	StyleSheet.create({
		mainContainer: {
			flex: 1,
			backgroundColor: theme.colors.BACKGROUND,
			justifyContent: 'center',
			alignItems: 'center',
		},
		logo: {
			width: width / 2,
			height: height / 2,
		},
		targetArea: {
			position: 'absolute',
			top: 0,
			width: '100%',
			height: 140,
			justifyContent: 'center',
			alignItems: 'center',
		},
		target: {
			width: width / 5,
			height: height / 5,
			opacity: 0.5,
		},
		textTarget: {
			position: 'absolute',
			left: 83,
			bottom: 20,
			color: theme.colors.TEXT,
			fontWeight: 'bold',
		},
	});
