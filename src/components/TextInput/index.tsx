import React, {ReactElement, useRef} from 'react';
import {Pressable, TextInput, TextInputProps} from 'react-native';
import {BoxDinamic, BoxShopfyProps} from '../Box';
import {TextDinamic} from '../Text/Text';
import {$textInputStyle} from './styles';
import {useAppThemeCustom} from '../../hooks/useAppTheme';

export interface TextInputDinamicProps extends TextInputProps {
  label: string;
  errorMessage?: string;
  rightComponent?: ReactElement;
  boxProps?: BoxShopfyProps;
}

const TextInputDinamic = ({
  label,
  errorMessage,
  rightComponent,
  boxProps,
  ...RNTextInputProps
}: TextInputDinamicProps) => {
  const {colors} = useAppThemeCustom();
  const inputRef = useRef<TextInput>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const $textInputContainer: BoxShopfyProps = {
    flexDirection: 'row',
    borderWidth: errorMessage ? 2 : 1,
    borderColor: errorMessage ? 'error' : 'gray4',
    padding: 's16',
    borderRadius: 's12',
  };

  return (
    <BoxDinamic {...boxProps}>
      <Pressable onPress={focusInput}>
        <TextDinamic preset="paragraphMedium" marginBottom="s4">
          {label}
        </TextDinamic>

        <BoxDinamic {...$textInputContainer}>
          <TextInput
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            style={$textInputStyle}
            {...RNTextInputProps}
          />

          {rightComponent && (
            <BoxDinamic justifyContent="center" ml="s16">
              {rightComponent}
            </BoxDinamic>
          )}
        </BoxDinamic>
        {errorMessage && (
          <TextDinamic preset="paragraphSmall" bold color="error">
            {errorMessage}
          </TextDinamic>
        )}
      </Pressable>
    </BoxDinamic>
  );
};

export {TextInputDinamic};
