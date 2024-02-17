import { StyleSheet } from 'react-native';

export const COLORS = {
	primary: '#0b45ef',
	secondary: '#ff9f1c',
	white: '#fff',
	black: '#000',
	gray: '#9e9e9e',
	lightGray: '#f5f5f5',
	darkGray: '#616161',
	danger: '#f44336',
	success: '#4caf50',
	PALETTE: {
		L_BLUEISH: '#6A8EFF',
		M_BLUEISH: '#577CF2',
		D_BLUEISH: '#4F70DB',
		MD_DEEPBLUE: '#273DC1',
		D_DEEPBLUE: '#203170',
		L_YELLOW: '#FFCD35',
		D_YELLOW: '#EABC31',
	},
};

export const STYLES = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonPrimary: {
		backgroundColor: COLORS.primary,
		padding: 10,
		borderRadius: 5,
		color: '#fff',
	},
	buttonLinePrimary: {
		borderColor: COLORS.primary,
		padding: 10,
		borderWidth: 1,
		borderRadius: 5,
		backgroundColor: '#fff',
		color: COLORS.primary,
	},
	buttonSecondary: {
		backgroundColor: COLORS.secondary,
		padding: 10,
		borderRadius: 5,
		color: '#fff',
	},
	buttonLineSecondary: {
		borderColor: COLORS.secondary,
		padding: 10,
		borderWidth: 1,
		borderRadius: 5,
		backgroundColor: '#fff',
		color: COLORS.secondary,
	},
	buttonDanger: {
		backgroundColor: COLORS.danger,
		padding: 10,
		borderRadius: 5,
		color: '#fff',
	},
	buttonLineDanger: {
		borderColor: COLORS.danger,
		padding: 10,
		borderWidth: 1,
		borderRadius: 5,
		backgroundColor: '#fff',
		color: COLORS.danger,
	},
	buttonSuccess: {
		backgroundColor: COLORS.success,
		padding: 10,
		borderRadius: 5,
		color: '#fff',
	},
	buttonLineSuccess: {
		borderColor: COLORS.success,
		padding: 10,
		borderWidth: 1,
		borderRadius: 5,
		backgroundColor: '#fff',
		color: COLORS.success,
	},
	textPrimary: {
		color: COLORS.primary,
	},
	textSecondary: {
		color: COLORS.secondary,
	},
	textDanger: {
		color: COLORS.danger,
	},
	textSuccess: {
		color: COLORS.success,
	},
	textWhite: {
		color: COLORS.white,
	},
	textBlack: {
		color: COLORS.black,
	},
	textGray: {
		color: COLORS.gray,
	},
	textLightGray: {
		color: COLORS.lightGray,
	},
	textDarkGray: {
		color: COLORS.darkGray,
	},
	titleH1: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	titleH2: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	titleH3: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	titleH4: {
		fontSize: 14,
		fontWeight: 'bold',
	},
	titleH5: {
		fontSize: 12,
		fontWeight: 'bold',
	},
	titleH6: {
		fontSize: 10,
		fontWeight: 'bold',
	},
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
		alignItems: 'center',
		justifyContent: 'center',
	},
	card: {
		backgroundColor: COLORS.white,
		padding: 20,
		borderRadius: 5,
		shadowColor: COLORS.black,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
});
