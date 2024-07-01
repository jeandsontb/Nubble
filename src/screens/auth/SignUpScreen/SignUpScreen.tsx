import React from 'react';

import {ScreenDinamic} from '../../../components/Screen';
import {TextDinamic} from '../../../components/Text/Text';
import {TextInputDinamic} from '../../../components/TextInput';
import {ButtonDinamic} from '../../../components/Button';
import {TextInputPasswordDinamic} from '../../../components/PasswordInput/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamListTypes} from '../../../routes/Routes';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

type ScreenProps = NativeStackScreenProps<
  RootStackParamListTypes,
  'SignUpScreen'
>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SignUpScreen = ({navigation}: ScreenProps) => {
  const {reset} = useResetNavigationSuccess();

  const signUpForm = () => {
    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na plataforma',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    });
  };

  return (
    <ScreenDinamic canGoBack scrollable>
      <TextDinamic preset="headingLarge" mb="s32">
        Criar uma conta
      </TextDinamic>

      <TextInputDinamic
        label="Seu username"
        placeholder="@"
        boxProps={{mb: 's20'}}
      />
      <TextInputDinamic
        label="Nome completo"
        placeholder="Digite seu nome completo"
        boxProps={{mb: 's20'}}
      />
      <TextInputDinamic
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <TextInputPasswordDinamic
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's48'}}
      />

      <ButtonDinamic onPress={signUpForm} title="Criar uma conta" />
    </ScreenDinamic>
  );
};

export {SignUpScreen};
