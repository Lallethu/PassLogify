import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigation from './src/navigation/RootStack';

const App = () => {
	return (
		<NavigationContainer>
			<RootStackNavigation />
		</NavigationContainer>
	);
};

export default App;
