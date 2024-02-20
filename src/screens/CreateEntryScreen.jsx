import React from 'react';
import { View, StyleSheet } from 'react-native';
import FakeBottomTab from '../components/FakeBottomTab';
import CreateEntryForm from '../components/CreateEntryForm';
import { FakeHeader } from '../components/FakeHeader';
import useTheme from '../hooks/useTheme';
import useThemedStyles from '../hooks/useThemeStyles';

const CreateEntryScreen = () => {
	const theme = useTheme();
	const style = useThemedStyles(styles);

	return (
		<>
			<FakeHeader />
			<View style={[style.containerFluid]}>
				<CreateEntryForm />
			</View>

			<FakeBottomTab route={'Create'} />
		</>
	);
};

const styles = theme =>
	StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
		},
		containerFluid: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: theme.colors.BACKGROUND,
		},
	});

export default CreateEntryScreen;
