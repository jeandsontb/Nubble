import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';

import {TextInputDinamic, TextInputDinamicProps} from '@components';

export function FormTextInputDinamic<FormType extends FieldValues>({
  control,
  name,
  rules,
  errorMessage,
  ...textInputProps
}: TextInputDinamicProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field, fieldState}) => (
        <TextInputDinamic
          value={field.value}
          onChangeText={field.onChange}
          errorMessage={fieldState.error?.message || errorMessage}
          {...textInputProps}
        />
      )}
    />
  );
}
