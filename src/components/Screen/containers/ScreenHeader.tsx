import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {
  BoxDinamic,
  IconDinamic,
  ScreenDinamicProps,
  TextDinamic,
  TouchableOpacityDinamic,
} from '@components';

type ScreenHeaderProps = Pick<ScreenDinamicProps, 'title' | 'canGoBack'>;

const ScreenHeader = ({title, canGoBack}: ScreenHeaderProps) => {
  const navigation = useNavigation();

  const ICON_SIZE = 20;

  return (
    <BoxDinamic
      alignItems="center"
      flexDirection="row"
      mb="s24"
      justifyContent="space-between">
      {canGoBack && (
        <TouchableOpacityDinamic
          alignItems="center"
          flexDirection="row"
          onPress={navigation.goBack}>
          <IconDinamic name="arrowLeft" color="primary" size={ICON_SIZE} />
          {!title && (
            <TextDinamic preset="paragraphMedium" semiBold ml="s8">
              Voltar
            </TextDinamic>
          )}
        </TouchableOpacityDinamic>
      )}
      {title && <TextDinamic preset="headingSmall">{title}</TextDinamic>}
      {title && <BoxDinamic width={ICON_SIZE} />}
    </BoxDinamic>
  );
};

export {ScreenHeader};
