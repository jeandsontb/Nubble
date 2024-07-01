import {ThemeColorTypes} from '../../theme/theme';
import {TouchableOpacityDinamicProps} from '../Box';

import {ButtonPresset} from '.';

interface ButtonUI {
  container: TouchableOpacityDinamicProps;
  content: ThemeColorTypes;
}

export const buttonPresets: Record<
  ButtonPresset,
  {
    default: ButtonUI;
    disabled: ButtonUI;
  }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'primary',
      },
      content: 'primaryContrast',
    },
    disabled: {
      container: {
        backgroundColor: 'gray4',
      },
      content: 'gray2',
    },
  },
  outline: {
    default: {
      container: {
        borderWidth: 1,
        borderColor: 'primary',
      },
      content: 'primary',
    },
    disabled: {
      container: {
        borderWidth: 1,
        borderColor: 'gray4',
      },
      content: 'gray2',
    },
  },
};
