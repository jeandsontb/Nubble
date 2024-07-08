import React, {useRef} from 'react';
import {Pressable, TextInput, TextInputProps} from 'react-native';

import {BoxDinamic, TextDinamic} from '@components';
import {useAppThemeCustom} from '@hooks';

import {$textInputStyle} from '../TextInput/styles';

interface TextMessageProps extends TextInputProps {
  onPressSend(message: string): void;
}

const TextMessage = ({
  onPressSend,
  value,
  ...restTextInput
}: TextMessageProps) => {
  const inputRef = useRef<TextInput>(null);
  const {colors} = useAppThemeCustom();

  function focusInput() {
    inputRef.current?.focus();
  }

  const sendIsDisabled = value?.trim().length === 0;

  return (
    <Pressable onPress={focusInput}>
      <BoxDinamic
        paddingHorizontal="s16"
        paddingVertical="s14"
        backgroundColor="gray5"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        borderRadius="s12">
        <TextInput
          ref={inputRef}
          value={value}
          placeholderTextColor={colors.gray2}
          style={[$textInputStyle, {color: colors.gray1}]}
          {...restTextInput}
        />

        <Pressable
          disabled={sendIsDisabled}
          onPress={() => onPressSend(value || '')}>
          <TextDinamic color={sendIsDisabled ? 'gray2' : 'primary'} bold>
            Enviar
          </TextDinamic>
        </Pressable>
      </BoxDinamic>
    </Pressable>
  );
};

export {TextMessage};
