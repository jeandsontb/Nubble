import React from 'react';

import {
  ButtonDinamic,
  IconDinamic,
  ScreenDinamic,
  TextDinamic,
} from '@components';
import {AuthScreenProps} from '@routes';

const SuccessScreen = ({
  route,
  navigation,
}: AuthScreenProps<'SuccessScreen'>) => {
  const boBackToBegin = () => {
    navigation.goBack();
  };

  return (
    <ScreenDinamic>
      <IconDinamic {...route.params.icon} />
      <TextDinamic preset="headingLarge" mt="s24">
        {route.params.title}
      </TextDinamic>
      <TextDinamic preset="paragraphLarge" mt="s16">
        {route.params.description}
      </TextDinamic>
      <ButtonDinamic
        onPress={boBackToBegin}
        title="Voltar ao início"
        mt="s40"
      />
    </ScreenDinamic>
  );
};

export {SuccessScreen};
