import { BRAND_COLORS, SUPPORTING_COLORS, NEUTRALS } from './colors';

const LightTheme = {
	dark: false,
	colors: {
		primary: BRAND_COLORS.primary[500],
		background: NEUTRALS.gray[100],
		card: NEUTRALS.gray[200],
		text: BRAND_COLORS.primary[800],
		border: NEUTRALS.gray[300],
		notification: BRAND_COLORS.primary[500],
	},
};

const DarkTheme = {
	dark: true,
	colors: {
		primary: BRAND_COLORS.primary[500],
		background: NEUTRALS.gray[800],
		card: NEUTRALS.gray[700],
		text: BRAND_COLORS.primary[200],
		border: NEUTRALS.gray[600],
		notification: BRAND_COLORS.primary[500],
	},
};

export { LightTheme, DarkTheme };
