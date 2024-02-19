import { View, Text } from 'react-native';
import React from 'react';
import FakeBottomTab from '../components/FakeBottomTab';
import { STYLES } from '../constantes/styles';
import CreateEntryForm from '../components/CreateEntryForm';
import { BackToDashboardHeader } from '../components/BackToDashboardHeader';

const CreateEntryScreen = () => {
	return (
		<>
			<BackToDashboardHeader />
			<View style={STYLES.container}>
				<CreateEntryForm />
			</View>

			<FakeBottomTab route={'Create'} />
		</>
	);
};

export default CreateEntryScreen;
