import { View, Text } from 'react-native';
import React from 'react';
import FakeBottomTab from '../components/FakeBottomTab';
import { STYLES } from '../constantes/styles';
import { FakeHeader } from '../components/FakeHeader';

const ManageGroupsScreen = () => {
	return (
		<>
			<FakeHeader />
			<View style={STYLES.container}>
				<Text>ManageGroupsScreen</Text>
			</View>

			<FakeBottomTab route={'Manage'} />
		</>
	);
};

export default ManageGroupsScreen;
