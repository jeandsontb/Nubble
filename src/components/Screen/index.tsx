import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {
  BoxDinamic,
  BoxShopfyProps,
  IconDinamic,
  TextDinamic,
  TouchableOpacityDinamic,
} from '@components';
import {useAppSafeAreaCustom, useAppThemeCustom} from '@hooks';

import {
  ScrollViewContainerDinamic,
  ViewContainerDinamic,
} from './containers/ScreenContainers';

interface ScreenDinamicProps extends BoxShopfyProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

const ScreenDinamic = ({
  canGoBack = false,
  scrollable = false,
  children,
  style,
  ...boxShopfyProps
}: ScreenDinamicProps) => {
  const {top, bottom} = useAppSafeAreaCustom();
  const {colors} = useAppThemeCustom();

  const navigation = useNavigation();

  const Container = scrollable
    ? ScrollViewContainerDinamic
    : ViewContainerDinamic;

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <BoxDinamic
          paddingHorizontal="s24"
          style={[{paddingTop: top, paddingBottom: bottom}, style]}
          {...boxShopfyProps}>
          {canGoBack && (
            <TouchableOpacityDinamic
              mb="s24"
              flexDirection="row"
              alignItems="center"
              onPress={navigation.goBack}>
              <IconDinamic name="arrowLeft" color="primary" />
              <TextDinamic preset="paragraphMedium" semiBold ml="s8">
                Voltar
              </TextDinamic>
            </TouchableOpacityDinamic>
          )}
          {children}
        </BoxDinamic>
      </Container>
    </KeyboardAvoidingView>
  );
};

export {ScreenDinamic};
