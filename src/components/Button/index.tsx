import React from 'react';
import {TextDinamic} from '../Text/Text';
import {TouchableOpacityDinamic, TouchableOpacityDinamicProps} from '../Box';
import {buttonPresets} from './button-pressets';
import {ActivityIndicatorDinamic} from '../ActivityIndicator';

export type ButtonPresset = 'primary' | 'outline';

interface ButtonDinamicProps extends TouchableOpacityDinamicProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPresset;
  disabled?: boolean;
}

const ButtonDinamic = ({
  title,
  loading,
  preset = 'primary',
  disabled,
  ...touchableOpacityDinamicProps
}: ButtonDinamicProps) => {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];

  return (
    <TouchableOpacityDinamic
      disabled={disabled || loading}
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonPreset.container}
      {...touchableOpacityDinamicProps}>
      {loading ? (
        <ActivityIndicatorDinamic color={buttonPreset.content} />
      ) : (
        <TextDinamic preset="paragraphMedium" bold color={buttonPreset.content}>
          {title}
        </TextDinamic>
      )}
    </TouchableOpacityDinamic>
  );
};

export {ButtonDinamic};
