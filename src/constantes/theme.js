import { BRAND_COLORS, SUPPORTING_COLORS, NEUTRALS } from './colors';
import { STYLES } from './styles';

const Common = {
	...BRAND_COLORS,
	...SUPPORTING_COLORS,
	...NEUTRALS,
	...STYLES,
};

const LightTheme = {
	...Common,
	background: NEUTRALS.white,
	text: NEUTRALS.black,
	card: NEUTRALS.white,
	border: NEUTRALS.gray[300],
	notification: BRAND_COLORS.primary[500],
	information: NEUTRALS.gray[500],
	success: SUPPORTING_COLORS.success[500],
	warning: SUPPORTING_COLORS.warning[500],
	danger: SUPPORTING_COLORS.danger[500],
	primary: BRAND_COLORS.primary[500],
	secondary: BRAND_COLORS.secondary[500],
};

const DarkTheme = {
	...Common,
	background: NEUTRALS.black,
	text: NEUTRALS.white,
	card: NEUTRALS.black,
	border: NEUTRALS.gray[700],
	notification: BRAND_COLORS.primary[500],
	information: NEUTRALS.gray[500],
	success: SUPPORTING_COLORS.success[500],
	warning: SUPPORTING_COLORS.warning[500],
	danger: SUPPORTING_COLORS.danger[500],
	primary: BRAND_COLORS.primary[500],
	secondary: BRAND_COLORS.secondary[500],
};

const Typographies = {
	h1: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	h2: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	h3: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	h4: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	h5: {
		fontSize: 14,
		fontWeight: 'bold',
	},
	h6: {
		fontSize: 12,
		fontWeight: 'bold',
	},
	body: {
		fontSize: 16,
	},
	caption: {
		fontSize: 14,
	},
	italic: {
		fontStyle: 'italic',
	},
	bold: {
		fontWeight: 'bold',
	},
	underline: {
		textDecorationLine: 'underline',
	},
	lineThrough: {
		textDecorationLine: 'line-through',
	},
	overline: {
		textDecorationLine: 'overline',
	},
	capitalize: {
		textTransform: 'capitalize',
	},
	uppercase: {
		textTransform: 'uppercase',
	},
	lowercase: {
		textTransform: 'lowercase',
	},
	center: {
		textAlign: 'center',
	},
	left: {
		textAlign: 'left',
	},
	right: {
		textAlign: 'right',
	},
	justify: {
		textAlign: 'justify',
	},
};

export const colors = { LightTheme, DarkTheme, Typographies };
