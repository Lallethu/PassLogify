import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import ManageGroupsScreen from '../screens/ManageGroupsScreen';
import CreateEntryScreen from '../screens/CreateEntryScreen';
import PlaceHolderTabScreen from '../screens/PlaceHolderTabScreen';

const RootTab = createBottomTabNavigator();

const RootTabNavigation = () => {
	return (
		<RootTab.Navigator>
			<RootTab.Screen
				name="Manage Groups"
				component={ManageGroupsScreen}
				options={{
					headerShown: false,
				}}
			/>
      <RootTab.Screen
        name="Create Entry"
        component={CreateEntryScreen}
        options={{
          headerShown: false,
        }}
      />
      <RootTab.Screen
        name="PlaceHolderTab"
        component={PlaceHolderTabScreen}
        options={{
          headerShown: false,
        }}
      />
		</RootTab.Navigator>
	);
};

export default RootTabNavigation;
