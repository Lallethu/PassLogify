import { View, Text } from 'react-native';
import React from 'react';
import FakeBottomTab from '../components/FakeBottomTab';
import { STYLES } from '../constantes/styles';
import { SUPPORTING_COLORS } from '../constantes/colors';
import CreateEntryForm from '../components/CreateEntryForm';
import { CustomButton } from '../components/CustomButton';
import { useNavigation } from '@react-navigation/core';
import { BackToDashboardHeader } from '../components/BackToDashboardHeader';

const CreateEntryScreen = () => {
  const navigation = useNavigation();

	return (
		<>
      <BackToDashboardHeader />
			<View style={STYLES.container}>
				<CreateEntryForm />
			</View>

			<FakeBottomTab route={"Create"} />
		</>
	);
};

export default CreateEntryScreen;
