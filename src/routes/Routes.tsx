import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {useAuthCredentialsService} from '@services';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';

const Routes = () => {
  const {authCredentials} = useAuthCredentialsService();

  return (
    <NavigationContainer>
      {authCredentials ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export {Routes};
