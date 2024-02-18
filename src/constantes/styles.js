import { StyleSheet, useColorScheme } from 'react-native';
import { BRAND_COLORS, SUPPORTING_COLORS, NEUTRALS } from './colors';
const isDarkMode = useColorScheme() === 'dark';


export const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: isDarkMode ? NEUTRALS.gray[800] : NEUTRALS.gray[200],
  },
  text: {
    color: isDarkMode ? BRAND_COLORS.primary[200] : BRAND_COLORS.primary[800],
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
