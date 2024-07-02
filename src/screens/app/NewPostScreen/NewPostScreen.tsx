import React from 'react';

import {ScreenDinamic, TextDinamic} from '@components';
import {AppTabScreenProps} from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NewPostScreen = (App: AppTabScreenProps<'NewPostScreen'>) => {
  return (
    <ScreenDinamic>
      <TextDinamic preset="headingLarge">New post screen</TextDinamic>
    </ScreenDinamic>
  );
};

export {NewPostScreen};
