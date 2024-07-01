import {TextStyle} from 'react-native';
import {$fontFamily, $fontSizes} from '../Text/Text';
import {theme} from '../../theme/theme';

const {colors} = theme;

export const $textInputStyle: TextStyle = {
  flexGrow: 1,
  flexShrink: 1,
  padding: 0,
  color: colors.gray1,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};
