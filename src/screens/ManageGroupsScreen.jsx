import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FakeBottomTab from '../components/FakeBottomTab';
import { FakeHeader } from '../components/FakeHeader';
import useTheme from '../hooks/useTheme';
import useThemedStyles from '../hooks/useThemeStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEntry } from '../hooks/useEntry';
import { useFocusEffect } from '@react-navigation/native';
import {
	GestureHandlerRootView,
	ScrollView,
} from 'react-native-gesture-handler';

const ManageGroupsScreen = () => {
	const theme = useTheme();
	const style = useThemedStyles(styles);

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<FakeHeader />
			<View style={[style.container]}>
					<Text style={[style.title]}>Manage Groups</Text>
					<Text style={[style.text, style.box]}>
						Here you can manage your groups. You can delete a group
						and all entries associated with it. You can also rename
						a group.
					</Text>
					<View style={{ height: 20 }} />
				<ScrollView style={{ width: '100%' }}>
          <Text style={[style.title, style.text]}>Manage Groups</Text>
          <Text style={[style.title, style.text]}>Manage Groups</Text>
          <Text style={[style.title, style.text]}>Manage Groups</Text>
          <Text style={[style.title, style.text]}>Manage Groups</Text>
          <Text style={[style.title, style.text]}>Manage Groups</Text>
          <Text style={[style.title, style.text]}>Manage Groups</Text>
          <Text style={[style.title, style.text]}>Manage Groups</Text>
          <Text style={[style.title, style.text]}>Manage Groups</Text>
          <Text style={[style.title, style.text]}>Manage Groups</Text>
          <Text style={[style.title, style.text]}>Manage Groups</Text>
          <Text style={[style.title, style.text]}>Manage Groups</Text>
          <Text style={[style.title, style.text]}>Manage Groups</Text>
          <Text style={[style.title, style.text]}>Manage Groups</Text>
          <Text style={[style.title, style.text]}>Manage Groups</Text>
          <Text style={[style.title, style.text]}>Manage Groups</Text>
          <Text style={[style.title, style.text]}>Manage Groups</Text>
          <Text style={[style.title, style.text]}>Manage Groups</Text>
          <Text style={[style.title, style.text]}>Manage Groups</Text>
          <Text style={[style.title, style.text]}>Manage Groups</Text>
          <Text style={[style.title, style.text]}>Manage Groups</Text>
          <Text style={[style.title, style.text]}>Manage Groups</Text>
          <Text style={[style.title, style.text]}>Manage Groups</Text>
        </ScrollView>
			</View>
      <FakeBottomTab route={'Manage'} />
		</GestureHandlerRootView>
	);
};

const styles = theme =>
	StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: theme.colors.BACKGROUND,
		},
		card: {
			padding: 20,
			borderRadius: 5,
			margin: 10,
		},
		title: {
      marginTop: 10,
      padding: 20,
			fontSize: 20,
			fontWeight: 'bold',
			letterSpacing: 1,
      color: theme.colors.TEXT,
		},
		text: {
			fontSize: 16,
			letterSpacing: 1,
		},
		spacerHorizontal: {
			marginHorizontal: 20,
		},
    box: {
      padding: 20,
      backgroundColor: theme.colors.BACKGROUND_TINT,
      color: theme.colors.TEXT,
    },
	});

export default ManageGroupsScreen;

/* dump trash blyat

<GestureHandlerRootView style={{ flex: 1 }}>
			<FakeHeader />
			<View style={[style.container]}>
				<ScrollView style={{ width: '100%' }}>
					<Text style={[style.title, style.text]}>Manage Groups</Text>
					<Text style={[style.text]}>
						Here you can manage your groups. You can delete a group
						and all entries associated with it. You can also rename
						a group.
					</Text>
					<View style={{ height: 20 }} />

					{listOfLogins ? (
						listOfLogins.map((group, index) => {
							if (group.groupLabel === '') return;
							if (group[0] === undefined) return;
							return (
								<View
									key={index}
									style={[
										style.card,
										{
											backgroundColor:
												theme.colors.BACKGROUND_TINT,
											color: theme.colors.TEXT,
										},
									]}>
									<Text
										style={[
											style.text,
											{ fontWeight: 'bold' },
										]}>
										{group.groupLabel}
									</Text>
									<View style={{ flexDirection: 'row' }}>
										<Text
											style={[
												style.text,
												{
													color: theme.colors.DANGER,
													fontWeight: 'bold',
												},
											]}
											onPress={() => {
												// deleteGroup(group.groupLabel);
											}}>
											Delete
										</Text>

										<Text
											style={[
												style.text,
												{
													color: theme.colors.WARNING,
													fontWeight: 'bold',
												},
											]}
											onPress={() => {
												// renameGroup(group.groupLabel);
											}}>
											Rename
										</Text>
									</View>
								</View>
							);
						})
					) : (
						<Text style={[style.text]}>No groups found</Text>
					)}
				</ScrollView>
			</View>

			<FakeBottomTab route={'Manage'} />
		</GestureHandlerRootView>
*/
