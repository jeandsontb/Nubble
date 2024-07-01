import {createText} from '@shopify/restyle';
import React from 'react';
import {TextStyle} from 'react-native';
import {ThemeTypes} from '../../theme/theme';

const TextShopfy = createText<ThemeTypes>();
type TextShopfyProps = React.ComponentProps<typeof TextShopfy>;

interface TextDinamicProps extends TextShopfyProps {
  preset?: TextSizesVariants;
  bold?: boolean;
  italic?: boolean;
  semiBold?: boolean;
}

const TextDinamic = ({
  children,
  preset = 'paragraphMedium',
  bold,
  italic,
  semiBold,
  style,
  ...restTextShopfyProps
}: TextDinamicProps) => {
  const fontFamilyDinamic = getFontFamily(preset, bold, semiBold, italic);

  return (
    <TextShopfy
      color="backgroundContrast"
      style={[$fontSizes[preset], {fontFamily: fontFamilyDinamic}, style]}
      {...restTextShopfyProps}>
      {children}
    </TextShopfy>
  );
};

export {TextDinamic};

//  SESSÃO LÓGICA PARA PEGAR OS TAMANHOS DAS FONTES
type TextSizesVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

export const $fontSizes: Record<TextSizesVariants, TextStyle> = {
  headingLarge: {fontSize: 32, lineHeight: 38.4},
  headingMedium: {fontSize: 22, lineHeight: 26.4},
  headingSmall: {fontSize: 18, lineHeight: 23.4},

  paragraphLarge: {fontSize: 18, lineHeight: 25.2},
  paragraphMedium: {fontSize: 16, lineHeight: 22.4},
  paragraphSmall: {fontSize: 14, lineHeight: 19.6},

  paragraphCaption: {fontSize: 12, lineHeight: 16.8},
  paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
};

// SESSÃO LÓGICA PARA PEGAR O ESTILO DA FONTE A SER APLICADA'
const getFontFamily = (
  preset: TextSizesVariants,
  bold?: boolean,
  semiBold?: boolean,
  italic?: boolean,
) => {
  if (
    preset === 'headingLarge' ||
    preset === 'headingMedium' ||
    preset === 'headingSmall'
  ) {
    return italic ? $fontFamily.boldItalic : $fontFamily.bold;
  }

  switch (true) {
    case bold && italic:
      return $fontFamily.boldItalic;
    case bold:
      return $fontFamily.bold;
    case italic:
      return $fontFamily.italic;
    case semiBold && italic:
      return $fontFamily.mediumItalic;
    case semiBold:
      return $fontFamily.medium;
    default:
      return $fontFamily.regular;
  }
};

export const $fontFamily = {
  black: 'Satoshi-Black',
  blackItalic: 'Satoshi-BlackItalic',
  bold: 'Satoshi-Bold',
  boldItalic: 'Satoshi-BoldItalic',
  italic: 'Satoshi-Italic',
  light: 'Satoshi-Light',
  lightItalic: 'Satoshi-LightItalic',
  medium: 'Satoshi-Medium',
  mediumItalic: 'Satoshi-MediumItalic',
  regular: 'Satoshi-Regular',
};
