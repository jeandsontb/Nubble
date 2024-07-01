import React from 'react';
import {TextDinamic} from '../../../components/Text/Text';
import {TextInputDinamic} from '../../../components/TextInput';
import {IconDinamic} from '../../../components/Icon';
import {ButtonDinamic} from '../../../components/Button';
import {ScreenDinamic} from '../../../components/Screen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamListTypes} from '../../../routes/Routes';

type LoginScreenProps = NativeStackScreenProps<
  RootStackParamListTypes,
  'LoginScreen'
>;

const LoginScreen = ({navigation}: LoginScreenProps) => {
  const navigateToSignUpScreen = () => {
    navigation.navigate('SignUpScreen');
  };

  const handleNavigateToForgotPasswordScreen = () => {
    navigation.navigate('ForgotPasswordScreen');
  };

  return (
    <ScreenDinamic>
      <TextDinamic marginBottom="s8" preset="headingLarge">
        Olá
      </TextDinamic>

      <TextDinamic preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </TextDinamic>

      <TextInputDinamic
        errorMessage="Error de entrada"
        placeholder="Digite seu e-mail"
        label="E-mail"
        boxProps={{marginBottom: 's20'}}
      />

      <TextInputDinamic
        placeholder="Digite sua senha"
        label="Senha"
        rightComponent={<IconDinamic name="eyeOn" color="gray2" />}
        boxProps={{marginBottom: 's10'}}
      />

      <TextDinamic
        color="primary"
        preset="paragraphSmall"
        bold
        onPress={handleNavigateToForgotPasswordScreen}>
        Esqueci minha senha
      </TextDinamic>

      <ButtonDinamic title="Entrar" marginTop="s48" />
      <ButtonDinamic
        onPress={navigateToSignUpScreen}
        title="Criar uma conta"
        preset="outline"
        marginTop="s12"
      />
    </ScreenDinamic>
  );
};

export {LoginScreen};
