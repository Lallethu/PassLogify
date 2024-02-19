import { useContext } from 'react';
import { ThemeContext } from '../services/themeProvider';

const useTheme = () => {
	return useContext(ThemeContext);
};

export default useTheme;
