import {useTheme} from '@shopify/restyle';
import {ThemeTypes} from '../theme/theme';

export const useAppThemeCustom = () => {
  return useTheme<ThemeTypes>();
};
