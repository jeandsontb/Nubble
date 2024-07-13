import React from 'react';

import {useAuthSignOut} from '@domain';

import {ButtonDinamic, ScreenDinamic} from '@components';
import {AppScreenProps} from '@routes';

const SettingsScreen = ({}: AppScreenProps<'SettingsScreen'>) => {
  const {isLoading, signOut} = useAuthSignOut();

  return (
    <ScreenDinamic canGoBack title="Configurações">
      <ButtonDinamic
        title="Sair da conta"
        loading={isLoading}
        onPress={signOut}
      />
    </ScreenDinamic>
  );
};

export {SettingsScreen};
