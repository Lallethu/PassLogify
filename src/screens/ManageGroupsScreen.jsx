import { View, Text } from 'react-native';
import React from 'react';
import FakeBottomTab from '../components/FakeBottomTab';
import { STYLES } from '../constantes/styles';
import { BackToDashboardHeader } from '../components/BackToDashboardHeader';

const ManageGroupsScreen = () => {
	return (
		<>
			<BackToDashboardHeader />
			<View style={STYLES.container}>
				<Text>ManageGroupsScreen</Text>
			</View>

			<FakeBottomTab route={'Manage'} />
		</>
	);
};

export default ManageGroupsScreen;
