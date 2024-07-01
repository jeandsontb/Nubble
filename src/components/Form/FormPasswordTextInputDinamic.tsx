import React from 'react';

import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';

import {
  TextInputPasswordDinamic,
  TextInputPasswordDinamicProps,
} from '@components';

export function FormPasswordTextInputDinamic<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...TextPasswordInputProps
}: TextInputPasswordDinamicProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field, fieldState}) => (
        <TextInputPasswordDinamic
          value={field.value}
          onChangeText={field.onChange}
          errorMessage={fieldState.error?.message}
          {...TextPasswordInputProps}
        />
      )}
    />
  );
}
