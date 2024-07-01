import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';

import {
  ButtonDinamic,
  FormPasswordTextInputDinamic,
  FormTextInputDinamic,
  ScreenDinamic,
  TextDinamic,
} from '@components';
import {RootStackParamListTypes} from '@routes';

import {SignUpSchemaTypes, signUpSchema} from './signUpSchema';

type ScreenProps = NativeStackScreenProps<
  RootStackParamListTypes,
  'SignUpScreen'
>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SignUpScreen = ({navigation}: ScreenProps) => {
  // const {reset} = useResetNavigationSuccess();

  const {control, formState, handleSubmit} = useForm<SignUpSchemaTypes>({
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
    resolver: zodResolver(signUpSchema),
  });

  const signUpForm = (formValues: SignUpSchemaTypes) => {
    console.log('fosadfa ', formValues);
    // reset({
    //   title: 'Sua conta foi criada com sucesso!',
    //   description: 'Agora é só fazer login na plataforma',
    //   icon: {
    //     name: 'checkRound',
    //     color: 'success',
    //   },
    // });
  };

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
        boxProps={{mb: 's20'}}
      />

      <FormTextInputDinamic
        control={control}
        name="fullName"
        label="Nome completo"
        placeholder="Digite seu nome completo"
        autoCapitalize="words"
        boxProps={{mb: 's20'}}
      />

      <FormTextInputDinamic
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
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
        disabled={!formState.isValid}
        onPress={handleSubmit(signUpForm)}
      />
    </ScreenDinamic>
  );
};

export {SignUpScreen};
