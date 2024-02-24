import React, { useState } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import useTheme from '../hooks/useTheme';
import useThemedStyles from '../hooks/useThemeStyles';
import FakeBottomTab from '../components/FakeBottomTab';

const AboutScreen = () => {
	const theme = useTheme();
	const style = useThemedStyles(styles);

	const ExpendableCard = ({ title, dropDown = false, children }) => {
		const [visible, setVisible] = useState(false);
		const switchVisible = () => {
			setVisible(!visible);
		};
		return (
			<View style={style.expendableCard}>
				<TouchableOpacity onPress={switchVisible}>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}>
						<Text style={style.cardTitle}>{title}</Text>
						<Image
							source={
								visible
									? require('../assets/upArrowWhite.png')
									: require('../assets/downArrowWhite.png')
							}
							style={{
								width: '60%',
								height: 22,
								resizeMode: 'contain',
							}}
						/>
					</View>
				</TouchableOpacity>
				<View style={{ display: visible ? 'flex' : 'none' }}>
					{children}
				</View>
			</View>
		);
	};

	return (
		<>
			<ScrollView
				style={{
					width: '100%',
					backgroundColor: theme.colors.BACKGROUND,
				}}>
				<View style={style.body}>
					<ExpendableCard title="Who are we?" dropDown={true}>
						<Text style={style.text}>
							We are VYB - Voluptuous Yarn Ball, a group of 3 friends, students from{' '}
							<Text style={{ color: theme.colors.INFORMATION }}>
								Epitech - Web@cademie
							</Text>
						</Text>
            <Image source={require('../assets/studio-logo.png')} style={{width: '100%', height: 200, resizeMode: 'contain'}} />
					</ExpendableCard>
					<View style={[style.box, style.box.backgrounded]}>
						<Text style={style.text}>
							<Text style={style.title}>PassLogify</Text> is a
							simple and secure password manager. It allows you to{' '}
							<Text style={{ color: theme.colors.INFORMATION }}>
								store your passwords
							</Text>{' '}
							and other important information{' '}
							<Text style={{ color: theme.colors.INFORMATION }}>
								in a secure way
							</Text>
							. It uses a password creation technique that push
							the time spent by a{' '}
							<Text style={{ color: theme.colors.DANGER }}>
								hacker to crack your password
							</Text>{' '}
							to an abusrd amount of time... Something like{' '}
							<Text style={{ color: theme.colors.INFORMATION }}>
								7 Billion years
							</Text>{' '}
							to say the least.
						</Text>
					</View>
					<View style={style.separator} />
					<Text style={style.title}>Features</Text>
					<Text style={style.text}>
						- Secure storage of your passwords
					</Text>
					<Text style={style.text}>
						- Re-organization of the groups
					</Text>
					<Text style={style.text}>- Password generation</Text>
					<Text style={style.text}>- Renaming group label</Text>
					<Text style={style.text}>- Dark mode</Text>
					<View style={style.separator} />
					<View style={[style.box, style.box.backgrounded]}>
						<Text style={style.title}>Contact</Text>
						<Text style={style.text}>
							If you have any questions or suggestions, please
							contact us at the following email address:
							<Text style={style.contactEmail}>
								<Text> contact.vyb4x@gmail.com</Text>
							</Text>
						</Text>
					</View>
				</View>
			</ScrollView>
			<FakeBottomTab />
		</>
	);
};

const styles = theme =>
	StyleSheet.create({
		body: {
			flex: 1,
			backgroundColor: theme.colors.BACKGROUND,
			justifyContent: 'space-evenly',
			alignItems: 'center',
		},
		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
		},
		header: {
			backgroundColor: theme.colors.PRIMARY,
			padding: 20,
			justifyContent: 'center',
			alignItems: 'center',
		},
		card: {
			backgroundColor: theme.colors.CARD,
			padding: 10,
			borderRadius: 5,
			margin: 10,
		},
		expendableCard: {
			backgroundColor: theme.colors.CARD,
			padding: 10,
			borderRadius: 5,
			margin: 10,
			flexDirection: 'column',
			justifyContent: 'flex-start',
			alignItems: 'left',
			width: '95%',
		},
		title: {
			color: theme.colors.TITLE,
			fontSize: theme.typography.size.L,
			letterSpacing: theme.typography.letterSpacing.M,
			fontWeight: 'bold',
		},
		shortSection: {
			flexDirection: 'column',
			justifyContent: 'flex-start',
			alignItems: 'left',
			width: '80%',
		},
		text: {
			color: theme.colors.TEXT,
			fontSize: theme.typography.size.M,
			letterSpacing: theme.typography.letterSpacing.S,
			textAlign: 'justify',
		},
		contactEmail: {
			color: theme.colors.INFORMATION,
			fontSize: theme.typography.size.M,
		},
		button: {
			padding: 10,
			borderRadius: 5,
			margin: 10,
		},
		separator: {
			borderBottomColor: theme.colors.BORDER,
			borderBottomWidth: 1,
			width: '85%',
			margin: 10,
			opacity: 0.5,
		},
		spacer: {
			margin: 10,
			borderBottomWidth: 1,
			borderColor: theme.colors.BORDER,
		},
		cardTitle: {
			color: theme.colors.TITLE,
			fontSize: theme.typography.size.L,
			letterSpacing: theme.typography.letterSpacing.M,
			fontWeight: 'bold',
		},
		spacerNoMargin: {
			margin: 0,
			borderBottomWidth: 1,
			borderColor: theme.colors.BORDER,
		},
		spacerHorizontal: {
			...styles.spacer,
			marginVertical: 0,
			marginHorizontal: 5,
			borderBottomWidth: 1,
			borderColor: theme.colors.BORDER,
		},
		spacerVertical: {
			...styles.spacer,
			marginHorizontal: 0,
			marginBottom: 15,
			borderBottomWidth: 1,
			borderColor: theme.colors.BORDER,
		},
		box: {
			padding: 20,
			width: '100%',
			color: theme.colors.TEXT,
			backgrounded: {
				backgroundColor: theme.colors.BACKGROUND_TINT,
			},
		},
	});

export default AboutScreen;
