import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import FakeBottomTab from '../components/FakeBottomTab';
import { FakeHeader } from '../components/FakeHeader';
import useTheme from '../hooks/useTheme';
import useThemedStyles from '../hooks/useThemeStyles';
import { useEntry } from '../hooks/useEntry';
import { useFocusEffect } from '@react-navigation/native';
import CustomPrompt from '../components/CustomPrompt';
import {
	GestureHandlerRootView,
	ScrollView,
} from 'react-native-gesture-handler';
import ExpendableLoginCard from '../components/ExpendableLoginCard';

const ManageGroupsScreen = () => {
	const theme = useTheme();
	const style = useThemedStyles(styles);

	const { getData, deleteData, updateEntry } = useEntry();
	const [listOfLogins, setListOfLogins] = useState([]);
	const [isPromptVisible, setIsPromptVisible] = useState(false);
	const [groupLabel, setGroupLabel] = useState('');

	const onDeleteGroup = async groupLabel => {
		Alert.alert(
			'Delete group',
			`Are you sure you want to delete the group ${groupLabel}?`,
			[
				{
					text: 'Cancel',
					onPress: () => console.log('Cancel Pressed'),
					style: 'cancel',
				},
				{
					text: 'Delete',
					onPress: async () => {
						await deleteData(groupLabel);
						const data = await getData();
						setListOfLogins(data);

            if (isPromptVisible) {
              setIsPromptVisible(false);
            }
						console.log('data', data);
						console.log('logins', listOfLogins);
					},
				},
			],
			{ cancelable: false },
		);
	};

	const openRenamePrompt = groupLabel => {
		setGroupLabel(groupLabel);
		setIsPromptVisible(true);
	};

	const handleClosePrompt = () => {
		setIsPromptVisible(false);
	};

const [isRenaming, setIsRenaming] = useState(false);

const handleRenameGroup = async newGroupLabel => {
  await updateEntry(groupLabel, newGroupLabel);
  setIsPromptVisible(false);
  setIsRenaming(true);
};

useEffect(() => {
  if (isRenaming) {
    const fetchData = async () => {
      const data = await getData();
      setListOfLogins(data);
      setIsRenaming(false);
    };
    fetchData();
  }
}, [isRenaming]);

	useFocusEffect(
		useCallback(() => {
			const fetchGroups = async () => {
				const data = await getData();
				setListOfLogins(data);
			};
			fetchGroups();
		}, []),
	);

	return (
		<GestureHandlerRootView
			style={[{ flex: 1, backgroundColor: theme.colors.BACKGROUND }]}>
			<FakeHeader />
			<View style={[style.container]}>
				<Text style={[style.title, { marginBottom: 15 }]}>
					Manage Groups
				</Text>
				<Text style={[style.text, style.box]}>
					Here you can manage your groups. You can delete a group and
					all entries associated with it. You can also rename a group.
					{'\n'}As well as reorganize the order of the groups.
				</Text>
				<View style={{ height: 20 }} />
				<ScrollView style={{ width: '100%' }}>
					{listOfLogins.length > 0 ? (
						listOfLogins.map((login, index) => (
							<ExpendableLoginCard
								key={index}
								{...{ login, index, styleFromTheme: style }}>
								<Text
									style={[
										style.text,
										{
											color: theme.colors.DANGER,
											fontWeight: 'bold',
										},
									]}
									onPress={() => {
										onDeleteGroup(login.groupLabel);
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
										openRenamePrompt(login.groupLabel);
									}}>
									Rename
								</Text>
							</ExpendableLoginCard>
						))
					) : (
						<Text>No logins yet :)</Text>
					)}
				</ScrollView>
				<CustomPrompt
					visible={isPromptVisible}
					onClose={handleClosePrompt}
					onSubmit={handleRenameGroup}
          text="Enter a new group label"
          placeholder="e.g. Social Media"
				/>
			</View>
			<FakeBottomTab route={'Manage'} />
		</GestureHandlerRootView>
	);
};

const styles = theme =>
	StyleSheet.create({
		body: {
			flex: 1,
			backgroundColor: theme.colors.BACKGROUND,
			justifyContent: 'space-evenly',
			alignItems: 'center',
			padding: 20,
		},
		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
		},
		header: {
			backgroundColor: theme.colors.PRIMARY,
			padding: 20,
			justifyContent: 'center',
			alignItems: 'center',
		},
		card: {
			backgroundColor: theme.colors.CARD,
			padding: 10,
			borderRadius: 5,
			margin: 10,
		},
		expendableCard: {
			backgroundColor: theme.colors.CARD,
			padding: 10,
			borderRadius: 5,
			margin: 10,
			flexDirection: 'column',
			justifyContent: 'flex-start',
			alignItems: 'left',
			width: '80%',
		},
		title: {
			color: theme.colors.TITLE,
			fontSize: theme.typography.size.L,
			letterSpacing: theme.typography.letterSpacing.M,
			fontWeight: 'bold',
		},
		shortSection: {
			flexDirection: 'column',
			justifyContent: 'flex-start',
			alignItems: 'left',
			width: '80%',
		},
		text: {
			color: theme.colors.TEXT,
			fontSize: theme.typography.size.M,
			letterSpacing: theme.typography.letterSpacing.S,
			textAlign: 'justify',
		},
		referralCode: {
			color: theme.colors.TEXT_SECONDARY,
			fontSize: theme.typography.size.S,
			letterSpacing: theme.typography.letterSpacing.L,
			fontWeight: 'bold',
		},
		button: {
			padding: 10,
			borderRadius: 5,
			margin: 10,
		},
		separator: {
			borderBottomColor: theme.colors.BORDER,
			borderBottomWidth: 1,
			width: '100%',
			margin: 10,
			opacity: 0.5,
		},
		spacer: {
			margin: 10,
			borderBottomWidth: 1,
			borderColor: theme.colors.BORDER,
		},
		cardTitle: {
			color: theme.colors.TITLE,
			fontSize: theme.typography.size.L,
			letterSpacing: theme.typography.letterSpacing.M,
			fontWeight: 'bold',
		},
		spacerNoMargin: {
			margin: 0,
			borderBottomWidth: 1,
			borderColor: theme.colors.BORDER,
		},
		spacerHorizontal: {
			...styles.spacer,
			marginVertical: 0,
			marginHorizontal: 5,
			borderBottomWidth: 1,
			borderColor: theme.colors.BORDER,
		},
		spacerVertical: {
			...styles.spacer,
			marginHorizontal: 0,
			marginBottom: 15,
			borderBottomWidth: 1,
			borderColor: theme.colors.BORDER,
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
