import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from '../screens/LandingScreen';

const RootStack = createNativeStackNavigator();

const RootStackNavigation = () => {
	return (
		<RootStack.Navigator
			screenOptions={{
				headerShown: false,
			}}>
			<RootStack.Group>
				<RootStack.Screen name="Landing" component={LandingScreen} />
			</RootStack.Group>
		</RootStack.Navigator>
	);
};

export default RootStackNavigation;
