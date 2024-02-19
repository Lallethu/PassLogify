import { View, Text } from 'react-native';
import React from 'react';
import FakeBottomTab from '../components/FakeBottomTab';
import { STYLES } from '../constantes/styles';
import CreateEntryForm from '../components/CreateEntryForm';
import { FakeHeader } from '../components/FakeHeader';

const CreateEntryScreen = () => {
	return (
		<>
			<FakeHeader />
			<View style={STYLES.container}>
				<CreateEntryForm />
			</View>

			<FakeBottomTab route={'Create'} />
		</>
	);
};

export default CreateEntryScreen;
