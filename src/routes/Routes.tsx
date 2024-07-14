import React from 'react';
import {ActivityIndicator} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {useAuthCredentialsService} from '@services';

import {BoxDinamic} from '@components';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';

const Routes = () => {
  const {authCredentials, isLoading} = useAuthCredentialsService();

  if (isLoading) {
    return (
      <BoxDinamic
        backgroundColor="background"
        justifyContent="center"
        alignItems="center">
        <ActivityIndicator size="large" />
      </BoxDinamic>
    );
  }

  return (
    <NavigationContainer>
      {authCredentials ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export {Routes};
