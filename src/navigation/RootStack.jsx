import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from '../screens/LandingScreen';
import RootDrawerNavigation from './RootDrawer';

const RootStack = createNativeStackNavigator();

const RootStackNavigation = () => {
	return (
		<RootStack.Navigator
			screenOptions={{
				headerShown: false,
			}}>
			<RootStack.Group>
				<RootStack.Screen name="Landing" component={LandingScreen} />
        <RootStack.Screen name="Dashboard" component={RootDrawerNavigation} />
			</RootStack.Group>
		</RootStack.Navigator>
	);
};

export default RootStackNavigation;
