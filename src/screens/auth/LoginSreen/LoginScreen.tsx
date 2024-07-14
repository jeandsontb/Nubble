import React from 'react';

import {useAuthSignIn} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useToastService} from '@services';
import {useForm} from 'react-hook-form';

import {
  ButtonDinamic,
  FormPasswordTextInputDinamic,
  FormTextInputDinamic,
  ScreenDinamic,
  TextDinamic,
} from '@components';
import {AuthScreenProps} from '@routes';

import {LoginSchemaTypes, loginSchema} from './loginSchema';

const LoginScreen = ({navigation}: AuthScreenProps<'LoginScreen'>) => {
  const {showToast} = useToastService();

  // FUNÇÃO DO REACT QUERY
  const {isLoading, signIn} = useAuthSignIn({
    onError: message => showToast({message, type: 'error'}),
  });

  const {control, formState, handleSubmit} = useForm<LoginSchemaTypes>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
    resolver: zodResolver(loginSchema),
  });

  const handleSubmitForm = ({email, password}: LoginSchemaTypes) => {
    signIn({email, password});
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
        keyboardType="email-address"
        placeholder="Digite seu e-mail"
        label="E-mail"
        boxProps={{marginBottom: 's20'}}
      />

      <FormPasswordTextInputDinamic
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
        loading={isLoading}
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
