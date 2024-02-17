import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigation from './RootStack';

const RootNavigation = () => {
	return (
		<>
			<NavigationContainer>
				<RootStackNavigation />
			</NavigationContainer>
		</>
	);
};

export default RootNavigation;
