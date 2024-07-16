import React from 'react';
import {ActivityIndicator} from 'react-native';

import {useAuthSignUp} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  ButtonDinamic,
  FormPasswordTextInputDinamic,
  FormTextInputDinamic,
  ScreenDinamic,
  TextDinamic,
} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps, AuthStackParamListTypes} from '@routes';

import {SignUpSchemaTypes, signUpSchema} from './signUpSchema';
import {useAsyncValidation} from './useAsyncValidation';

const resetParam: AuthStackParamListTypes['SuccessScreen'] = {
  title: 'Sua conta foi criada com sucesso!',
  description: 'Agora é só fazer login na plataforma',
  icon: {
    name: 'checkRound',
    color: 'success',
  },
};

const defaultValues: SignUpSchemaTypes = {
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const SignUpScreen = ({}: AuthScreenProps<'SignUpScreen'>) => {
  const {reset} = useResetNavigationSuccess();
  const {signUp, isLoading} = useAuthSignUp({
    onSuccess: () => {
      reset(resetParam);
    },
  });

  const {control, formState, handleSubmit, watch, getFieldState} =
    useForm<SignUpSchemaTypes>({
      defaultValues: defaultValues,
      mode: 'onChange',
      resolver: zodResolver(signUpSchema),
    });

  const signUpForm = (formValues: SignUpSchemaTypes) => {
    signUp(formValues);
  };

  const {usernameValidation, emailValidation} = useAsyncValidation({
    watch,
    getFieldState,
  });

  return (
    <ScreenDinamic canGoBack scrollable>
      <TextDinamic preset="headingLarge" mb="s32">
        Criar uma conta
      </TextDinamic>

      <FormTextInputDinamic
        control={control}
        name="username"
        label="Seu username"
        placeholder="@"
        errorMessage={usernameValidation.errorMessage}
        boxProps={{mb: 's20'}}
        rightComponent={
          usernameValidation.isFetching ? (
            <ActivityIndicator size="small" />
          ) : undefined
        }
      />

      <FormTextInputDinamic
        control={control}
        name="firstName"
        label="Primeiro nome"
        placeholder="Digite seu nome"
        autoCapitalize="words"
        boxProps={{mb: 's20'}}
      />

      <FormTextInputDinamic
        control={control}
        name="lastName"
        label="Sobrenome"
        placeholder="Digite seu sobrenome"
        autoCapitalize="words"
        boxProps={{mb: 's20'}}
      />

      <FormTextInputDinamic
        control={control}
        name="email"
        label="E-mail"
        errorMessage={emailValidation.errorMessage}
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
        rightComponent={
          emailValidation.isFetching ? (
            <ActivityIndicator size="small" />
          ) : undefined
        }
      />

      <FormPasswordTextInputDinamic
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's48'}}
      />

      <ButtonDinamic
        title="Criar uma conta"
        loading={isLoading}
        disabled={
          !formState.isValid ||
          usernameValidation.notReady ||
          emailValidation.notReady
        }
        onPress={handleSubmit(signUpForm)}
      />
    </ScreenDinamic>
  );
};

export {SignUpScreen};
