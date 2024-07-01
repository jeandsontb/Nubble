import React from 'react';
import {ScreenDinamic} from '../../../components/Screen';
import {IconDinamic} from '../../../components/Icon';
import {TextDinamic} from '../../../components/Text/Text';
import {ButtonDinamic} from '../../../components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamListTypes} from '../../../routes/Routes';

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
