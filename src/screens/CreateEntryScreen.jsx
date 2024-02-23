import React from 'react';
import { View, StyleSheet } from 'react-native';
import FakeBottomTab from '../components/FakeBottomTab';
import CreateEntryForm from '../components/CreateEntryForm';
import { FakeHeader } from '../components/FakeHeader';
import useTheme from '../hooks/useTheme';
import useThemedStyles from '../hooks/useThemeStyles';
import {
	GestureHandlerRootView,
	ScrollView,
} from 'react-native-gesture-handler';

const CreateEntryScreen = () => {
	const theme = useTheme();
	const style = useThemedStyles(styles);

	return (
		<GestureHandlerRootView style={{ flex: 1, backgroundColor: theme.colors.BACKGROUND }}>
			<FakeHeader />
			<ScrollView style={{ width: '100%' }}>
				<View style={[style.containerFluid, { paddingBottom: 20 }]}>
					<CreateEntryForm />
				</View>
			</ScrollView>
			<FakeBottomTab route={'Create'} />
		</GestureHandlerRootView>
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
		},
	});

export default CreateEntryScreen;
