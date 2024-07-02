import React from 'react';

import {ButtonDinamic, ScreenDinamic, TextDinamic} from '@components';
import {AppScreenProps} from '@routes';

const HomeScreen = ({navigation}: AppScreenProps<'HomeScreen'>) => {
  return (
    <ScreenDinamic>
      <TextDinamic preset="headingLarge">Home Screen</TextDinamic>
      <ButtonDinamic
        title="Settings"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
    </ScreenDinamic>
  );
};

export {HomeScreen};
