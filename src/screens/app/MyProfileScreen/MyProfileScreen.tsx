import React from 'react';

import {ScreenDinamic, TextDinamic} from '@components';
import {AppTabScreenProps} from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MyProfileScreen = (props: AppTabScreenProps<'MyProfileScreen'>) => {
  return (
    <ScreenDinamic>
      <TextDinamic preset="headingLarge">My profile screen</TextDinamic>
    </ScreenDinamic>
  );
};

export {MyProfileScreen};
