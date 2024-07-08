import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {BoxDinamic, BoxShopfyProps} from '@components';
import {useAppSafeAreaCustom, useAppThemeCustom} from '@hooks';

import {
  ScreenHeader,
  ScrollViewContainerDinamic,
  ViewContainerDinamic,
} from './containers';

export interface ScreenDinamicProps extends BoxShopfyProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  title?: string;
}

const ScreenDinamic = ({
  canGoBack = false,
  scrollable = false,
  children,
  style,
  title,
  ...boxShopfyProps
}: ScreenDinamicProps) => {
  const {top, bottom} = useAppSafeAreaCustom();
  const {colors} = useAppThemeCustom();

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
          <ScreenHeader canGoBack={canGoBack} title={title} />
          {children}
        </BoxDinamic>
      </Container>
    </KeyboardAvoidingView>
  );
};

export {ScreenDinamic};
