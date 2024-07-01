import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useAppThemeCustom} from './useAppTheme';

const useAppSafeAreaCustom = () => {
  const {top, bottom} = useSafeAreaInsets();
  const {spacing} = useAppThemeCustom();

  return {
    top: Math.max(top, spacing.s20),
    bottom: Math.max(bottom, spacing.s20),
  };
};

export {useAppSafeAreaCustom};
