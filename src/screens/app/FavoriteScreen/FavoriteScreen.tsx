import React from 'react';

import {ScreenDinamic, TextDinamic} from '@components';
import {AppTabScreenProps} from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FavoriteScreen = (props: AppTabScreenProps<'FavoriteScreen'>) => {
  return (
    <ScreenDinamic>
      <TextDinamic preset="headingLarge">Favorite screen</TextDinamic>
    </ScreenDinamic>
  );
};

export {FavoriteScreen};
