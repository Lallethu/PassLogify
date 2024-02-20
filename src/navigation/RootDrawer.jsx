import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '../screens/DashboardScreen';
import AboutScreen from '../screens/AboutScreen';
import AppSettingsScreen from '../screens/AppSettingsScreen';
import useTheme from '../hooks/useTheme';

const RootDrawer = createDrawerNavigator();

const RootDrawerNavigation = () => {
	const theme = useTheme();

	return (
		<RootDrawer.Navigator
			screenOptions={{
				drawerStyle: {
					backgroundColor: theme.colors.BACKGROUND,
				},
				drawerActiveTintColor: theme.colors.PRIMARY,
				headerStyle: {
					backgroundColor: theme.colors.BACKGROUND,
				},
				drawerLabelStyle: {
					color: theme.colors.TEXT,
				},
				drawerActiveBackgroundColor: theme.colors.BACKGROUND_TINT,
				headerTitleStyle: {
					color: theme.colors.TEXT,
				},
				headerTintColor: theme.colors.TEXT,
			}}>
			<RootDrawer.Group>
				<RootDrawer.Screen
					name="Dashboard"
					component={DashboardScreen}
				/>
				<RootDrawer.Screen name="About" component={AboutScreen} />
				<RootDrawer.Screen
					name="App Settings"
					component={AppSettingsScreen}
				/>
			</RootDrawer.Group>
		</RootDrawer.Navigator>
	);
};

export default RootDrawerNavigation;
