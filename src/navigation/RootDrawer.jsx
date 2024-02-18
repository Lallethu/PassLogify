import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '../screens/DashboardScreen';
import AboutScreen from '../screens/AboutScreen';
import AppSettingsScreen from '../screens/AppSettingsScreen';

const RootDrawer = createDrawerNavigator();

const RootDrawerNavigation = () => {
	return (
			<RootDrawer.Navigator>
				<RootDrawer.Group>
					<RootDrawer.Screen
						name="Dashboard"
						component={DashboardScreen}
					/>
          <RootDrawer.Screen
            name="About"
            component={AboutScreen}
          />
          <RootDrawer.Screen
            name="App Settings"
            component={AppSettingsScreen}
          />
				</RootDrawer.Group>
			</RootDrawer.Navigator>
	);
};

export default RootDrawerNavigation;
