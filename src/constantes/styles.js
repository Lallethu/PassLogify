import { StyleSheet } from 'react-native';
import { BRAND_COLORS, SUPPORTING_COLORS, NEUTRALS } from './colors';

export const STYLES = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: NEUTRALS.black[100],
		fontSize: 20,
	},
	button: {
		padding: 10,
		borderRadius: 5,
		margin: 10,
	},
	buttonText: {
		color: NEUTRALS.gray[100],
	},
	input: {
		backgroundColor: NEUTRALS.gray[100],
		padding: 10,
		borderRadius: 5,
		margin: 10,
	},
	header: {
		backgroundColor: BRAND_COLORS.primary[100],
	},
	headerTitle: {
		color: NEUTRALS.gray[100],
	},
	headerButton: {
		color: NEUTRALS.gray[100],
	},
	card: {
		backgroundColor: NEUTRALS.gray[100],
		padding: 10,
		borderRadius: 5,
		margin: 10,
	},
	cardTitle: {
		color: NEUTRALS.black[100],
		fontSize: 20,
	},
	cardText: {
		color: NEUTRALS.black[100],
	},
	cardButton: {
		backgroundColor: BRAND_COLORS.primary[100],
		padding: 10,
		borderRadius: 5,
		margin: 10,
	},
	cardButtonText: {
		color: NEUTRALS.gray[100],
	},
	tab: {
		backgroundColor: BRAND_COLORS.primary[100],
		padding: 10,
		borderRadius: 5,
		margin: 10,
	},
	tabText: {
		color: NEUTRALS.gray[100],
	},
	drawer: {
		backgroundColor: BRAND_COLORS.primary[100],
		padding: 10,
		borderRadius: 5,
		margin: 10,
	},
	drawerText: {
		color: NEUTRALS.gray[100],
	},
	bottomTab: {
		backgroundColor: BRAND_COLORS.primary[100],
		padding: 10,
		borderRadius: 5,
		margin: 10,
	},
	bottomTabText: {
		color: NEUTRALS.gray[100],
	},
	toggleThemeButton: {
		backgroundColor: BRAND_COLORS.primary[100],
		padding: 10,
		borderRadius: 5,
		margin: 10,
	},
	toggleThemeButtonText: {
		color: NEUTRALS.gray[100],
	},
	spacer: {
		margin: 10,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
	},
});
