import React from 'react';

import {useAuthRequestNewPassword} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useToastService} from '@services';
import {useForm} from 'react-hook-form';

import {
  ButtonDinamic,
  FormTextInputDinamic,
  ScreenDinamic,
  TextDinamic,
} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps, AuthStackParamListTypes} from '@routes';

import {
  ForgotPasswordSchemaTypes,
  forgotPasswordSchema,
} from './forgotPasswordSchema';

const resetParam: AuthStackParamListTypes['SuccessScreen'] = {
  title: `Enviamos as instruções ${'\n'}para o seu email`,
  description: 'Clique no link enviado no seu e-mail para recuperar sua senha',
  icon: {
    name: 'messageRound',
    color: 'primary',
  },
};

const ForgotPasswordScreen = ({}: AuthScreenProps<'ForgotPasswordScreen'>) => {
  const {reset} = useResetNavigationSuccess();

  const {showToast} = useToastService();

  const {requestNewPassword, isLoading} = useAuthRequestNewPassword({
    onSuccess: () => reset(resetParam),
    onError: message => showToast({message, type: 'error'}),
  });

  const {control, formState, handleSubmit} = useForm<ForgotPasswordSchemaTypes>(
    {
      defaultValues: {
        email: '',
      },
      mode: 'onChange',
      resolver: zodResolver(forgotPasswordSchema),
    },
  );

  const handleSubmitForm = (values: ForgotPasswordSchemaTypes) => {
    requestNewPassword(values.email);
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
        loading={isLoading}
        disabled={!formState.isValid}
        title="Recuperar senha"
        onPress={handleSubmit(handleSubmitForm)}
      />
    </ScreenDinamic>
  );
};

export {ForgotPasswordScreen};
