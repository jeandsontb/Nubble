import React from 'react';

import {ScreenDinamic, TextDinamic} from '@components';
import {AppScreenProps} from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SettingsScreen = ({navigation}: AppScreenProps<'SettingsScreen'>) => {
  return (
    <ScreenDinamic canGoBack>
      <TextDinamic preset="headingLarge">Settings Screen</TextDinamic>
    </ScreenDinamic>
  );
};

export {SettingsScreen};
