import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  createBox,
  createRestyleComponent,
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
  spacingShorthand,
  SpacingShorthandProps,
} from '@shopify/restyle';

import {ThemeTypes} from '@theme';

export const BoxDinamic = createBox<ThemeTypes>();
export type BoxShopfyProps = React.ComponentProps<typeof BoxDinamic>;

export type TouchableOpacityDinamicProps = BackgroundColorProps<ThemeTypes> &
  SpacingProps<ThemeTypes> &
  LayoutProps<ThemeTypes> &
  BorderProps<ThemeTypes> &
  SpacingShorthandProps<ThemeTypes> &
  TouchableOpacityProps;

export const TouchableOpacityDinamic = createRestyleComponent<
  TouchableOpacityDinamicProps,
  ThemeTypes
>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  TouchableOpacity,
);
