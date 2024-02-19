import React from 'react';
import { View, Text } from 'react-native';
import { CustomButton } from './CustomButton';
import { useNavigation } from '@react-navigation/core';
import { STYLES } from '../constantes/styles';
import { BRAND_COLORS, NEUTRALS } from '../constantes/colors';


export const BackToDashboardHeader = () => {
  const navigation = useNavigation();
  const handleNavigateToDashboard = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <Text></Text>
      <CustomButton onPress={handleNavigateToDashboard} style={[STYLES.button, {backgroundColor: BRAND_COLORS.primary[600]}]}> 
        <Text style={[{color: BRAND_COLORS.secondary[500]}]}>Go to Dashboard</Text>
      </CustomButton>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
};
