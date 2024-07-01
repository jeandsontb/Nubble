import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';

import {
  ButtonDinamic,
  FormTextInputDinamic,
  ScreenDinamic,
  TextDinamic,
} from '@components';
import {RootStackParamListTypes} from '@routes';

import {LoginSchemaTypes, loginSchema} from './loginSchema';

type LoginScreenProps = NativeStackScreenProps<
  RootStackParamListTypes,
  'LoginScreen'
>;

const LoginScreen = ({navigation}: LoginScreenProps) => {
  const {control, formState, handleSubmit} = useForm<LoginSchemaTypes>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
    resolver: zodResolver(loginSchema),
  });

  const handleSubmitForm = ({email, password}: LoginSchemaTypes) => {
    console.log('emais ', email, ' - ', password);
  };

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

      <FormTextInputDinamic
        control={control}
        name="email"
        placeholder="Digite seu e-mail"
        label="E-mail"
        boxProps={{marginBottom: 's20'}}
      />

      <FormTextInputDinamic
        control={control}
        name="password"
        placeholder="Digite sua senha"
        label="Senha"
        boxProps={{marginBottom: 's10'}}
      />

      <TextDinamic
        color="primary"
        preset="paragraphSmall"
        bold
        onPress={handleNavigateToForgotPasswordScreen}>
        Esqueci minha senha
      </TextDinamic>

      <ButtonDinamic
        title="Entrar"
        marginTop="s48"
        disabled={!formState.isValid}
        onPress={handleSubmit(handleSubmitForm)}
      />
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
