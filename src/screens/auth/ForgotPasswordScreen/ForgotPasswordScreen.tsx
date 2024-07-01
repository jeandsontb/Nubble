import React from 'react';
import {ScreenDinamic} from '../../../components/Screen';
import {TextDinamic} from '../../../components/Text/Text';
import {TextInputDinamic} from '../../../components/TextInput';
import {ButtonDinamic} from '../../../components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamListTypes} from '../../../routes/Routes';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

type ScreenProps = NativeStackScreenProps<
  RootStackParamListTypes,
  'ForgotPasswordScreen'
>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ForgotPasswordScreen = ({navigation}: ScreenProps) => {
  const {reset} = useResetNavigationSuccess();

  const handleSubmitForm = () => {
    reset({
      title: `Enviamos as instruções ${'\n'}para o seu email`,
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    });
  };

  return (
    <ScreenDinamic canGoBack>
      <TextDinamic preset="headingLarge" mb="s16">
        Esqueci minha senha
      </TextDinamic>
      <TextDinamic preset="paragraphLarge" mb="s32">
        Digite se e-mail e enviaremos as instruções para a redefinição de senha.
      </TextDinamic>
      <TextInputDinamic
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's40'}}
      />

      <ButtonDinamic title="Recuperar senha" onPress={handleSubmitForm} />
    </ScreenDinamic>
  );
};

export {ForgotPasswordScreen};
