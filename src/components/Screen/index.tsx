import React from 'react';
import {BoxDinamic, TouchableOpacityDinamic} from '../Box';
import {useAppSafeAreaCustom} from '../../hooks/useAppSafeAreaCustom';
import {IconDinamic} from '../Icon';
import {TextDinamic} from '../Text/Text';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {
  ScrollViewContainerDinamic,
  ViewContainerDinamic,
} from './containers/ScreenContainers';
import {useAppThemeCustom} from '../../hooks/useAppTheme';
import {useNavigation} from '@react-navigation/native';

interface ScreenDinamicProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

const ScreenDinamic = ({
  canGoBack = false,
  scrollable = false,
  children,
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
          paddingBottom="s24"
          paddingHorizontal="s24"
          style={{paddingTop: top, paddingBottom: bottom}}>
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
