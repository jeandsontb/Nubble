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

import {
  ForgotPasswordSchemaTypes,
  forgotPasswordSchema,
} from './forgotPasswordSchema';

type ScreenProps = NativeStackScreenProps<
  RootStackParamListTypes,
  'ForgotPasswordScreen'
>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ForgotPasswordScreen = ({navigation}: ScreenProps) => {
  // const {reset} = useResetNavigationSuccess();

  const {control, formState, handleSubmit} = useForm<ForgotPasswordSchemaTypes>(
    {
      defaultValues: {
        email: '',
      },
      mode: 'onChange',
      resolver: zodResolver(forgotPasswordSchema),
    },
  );

  const handleSubmitForm = ({email}: ForgotPasswordSchemaTypes) => {
    console.log('email ', email);
    // reset({
    //   title: `Enviamos as instruções ${'\n'}para o seu email`,
    //   description:
    //     'Clique no link enviado no seu e-mail para recuperar sua senha',
    //   icon: {
    //     name: 'messageRound',
    //     color: 'primary',
    //   },
    // });
  };

  return (
    <ScreenDinamic canGoBack>
      <TextDinamic preset="headingLarge" mb="s16">
        Esqueci minha senha
      </TextDinamic>
      <TextDinamic preset="paragraphLarge" mb="s32">
        Digite se e-mail e enviaremos as instruções para a redefinição de senha.
      </TextDinamic>

      <FormTextInputDinamic
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's40'}}
      />

      <ButtonDinamic
        disabled={!formState.isValid}
        title="Recuperar senha"
        onPress={handleSubmit(handleSubmitForm)}
      />
    </ScreenDinamic>
  );
};

export {ForgotPasswordScreen};
