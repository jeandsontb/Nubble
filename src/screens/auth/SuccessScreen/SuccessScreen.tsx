import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {
  ButtonDinamic,
  IconDinamic,
  ScreenDinamic,
  TextDinamic,
} from '@components';
import {RootStackParamListTypes} from '@routes';

type ScreenProps = NativeStackScreenProps<
  RootStackParamListTypes,
  'SuccessScreen'
>;

const SuccessScreen = ({route, navigation}: ScreenProps) => {
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
