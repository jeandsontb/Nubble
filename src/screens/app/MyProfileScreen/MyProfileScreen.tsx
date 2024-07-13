import React from 'react';

import {useAuthCredentialsService} from '@services';

import {BoxDinamic, IconDinamic, ScreenDinamic, TextDinamic} from '@components';
import {AppTabScreenProps} from '@routes';

const MyProfileScreen = ({
  navigation,
}: AppTabScreenProps<'MyProfileScreen'>) => {
  const {authCredentials} = useAuthCredentialsService();
  const name = authCredentials?.user.fullName;

  return (
    <ScreenDinamic>
      <BoxDinamic
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        {name && <TextDinamic preset="headingMedium">{name}</TextDinamic>}
        <IconDinamic
          name="settings"
          onPress={() => navigation.navigate('SettingsScreen')}
        />
      </BoxDinamic>
    </ScreenDinamic>
  );
};

export {MyProfileScreen};
