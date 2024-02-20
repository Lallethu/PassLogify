import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigation from './src/navigation/RootStack';
import ThemeProvider from './src/services/ThemeProvider';

const App = () => {
	return (
		<ThemeProvider>
			<NavigationContainer>
				<RootStackNavigation />
			</NavigationContainer>
		</ThemeProvider>
	);
};

export default App;
