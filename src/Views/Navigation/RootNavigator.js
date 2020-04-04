import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import TabNavigator from './TabNavigator';
import AppHeader from './AppHeader';

enableScreens();

export default () => {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <AppHeader />
      <TabNavigator />
    </NavigationContainer>
  );
};
