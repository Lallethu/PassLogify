import React, { useRef, useState } from 'react';
import {
	View,
	Image,
	StyleSheet,
	Dimensions,
	PanResponder,
	Text,
} from 'react-native';
import { COLORS, STYLES } from '../constantes/styles';

const { width, height } = Dimensions.get('screen');

const LandingScreen = ({ navigation }) => {
	const [position, setPosition] = useState({ x: 0, y: 0 }); // position of the user finger
	const panResponder = useRef(
		// panResponder to handle the user finger
		PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onPanResponderMove: (evt, gestureState) => {
				setPosition({
					x: 0, // we don't want to move the image left or right
					y: gestureState.dy, // we want to move the image up and down
				});
			},
			onPanResponderRelease: (evt, gestureState) => {
				const { dy } = gestureState; // get the distance the user finger moved
				const imgHeight = height / 2; // the height of the image
				if (dy < -imgHeight / 2 || dy > imgHeight / 2) {
					redirectToDashboard();
				}

				setPosition({ x: 0, y: 0 }); // return the image to its original position
			},
		}),
	).current;

	const redirectToDashboard = () => {
		navigation.navigate('Dashboard');
	};

	return (
		<View style={STYLES.container}>
			<View style={styles.targetArea}>
				<Image
					style={styles.target}
					source={require('../assets/targetZone.png')}
					resizeMode="contain"
				/>
			</View>
			<Text>Unlock 🔓</Text>
			<View style={styles.container} {...panResponder.panHandlers}>
				<Image
					style={[
						styles.logo,
						{
							transform: [{ translateY: position.y }],
						},
					]}
					source={require('../assets/logo.png')}
					resizeMode="contain"
				/>
			</View>
			<Text style={styles.textTarget}>
				↕️ Slide the logo up or down to unclock
			</Text>
		</View>
	);
};

export default LandingScreen;

const styles = StyleSheet.create({
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
		color: COLORS.PALETTE.D_DEEPBLUE,
		fontWeight: 'bold',
	},
});
