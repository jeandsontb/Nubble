import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {LoginScreen} from '../screens/auth/LoginSreen/LoginScreen';
import {SignUpScreen} from '../screens/auth/SignUpScreen/SignUpScreen';
import {SuccessScreen} from '../screens/auth/SuccessScreen/SuccessScreen';
import {IconDinamicProps} from '../components/Icon';
import {ForgotPasswordScreen} from '../screens/auth/ForgotPasswordScreen/ForgotPasswordScreen';

export type RootStackParamListTypes = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  SuccessScreen: {
    title: string;
    description: string;
    icon: Pick<IconDinamicProps, 'name' | 'color'>;
  };
  ForgotPasswordScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamListTypes>();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{headerShown: false, fullScreenGestureEnabled: true}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {Routes};
