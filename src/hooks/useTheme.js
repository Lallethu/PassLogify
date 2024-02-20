import { useContext } from 'react';
import { ThemeContext } from '../services/ThemeProvider';

const useTheme = () => {
	return useContext(ThemeContext);
};

export default useTheme;
