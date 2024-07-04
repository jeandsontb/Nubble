import React from 'react';

import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SettingsScreen} from '@screens';

import {
  AppTabBottomTabParamListTypes,
  AppTabNavigator,
} from './AppTabNavigator';

export type AppStackParamListTypes = {
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamListTypes>;
  SettingsScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamListTypes>();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="AppTabNavigator">
      <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export {AppStack};