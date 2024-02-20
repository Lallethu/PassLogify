import useTheme from '../hooks/useTheme';

const useThemedStyles = styles => {
	const theme = useTheme();
	return styles(theme);
};

export default useThemedStyles;