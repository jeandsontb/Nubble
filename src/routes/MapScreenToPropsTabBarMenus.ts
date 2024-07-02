import {IconDinamicProps} from '@components';

import {AppTabBottomTabParamListTypes} from './AppTabNavigator';

export const mapScreenToProps: Record<
  keyof AppTabBottomTabParamListTypes,
  {
    label: string;
    icon: {
      focused: IconDinamicProps['name'];
      unfocused: IconDinamicProps['name'];
    };
  }
> = {
  HomeScreen: {
    label: 'Início',
    icon: {
      focused: 'homeFill',
      unfocused: 'home',
    },
  },
  NewPostScreen: {
    label: 'Novo post',
    icon: {
      focused: 'newPost',
      unfocused: 'newPost',
    },
  },
  FavoriteScreen: {
    label: 'Favorito',
    icon: {
      focused: 'bookmarkFill',
      unfocused: 'bookmark',
    },
  },
  MyProfileScreen: {
    label: 'Meu perfil',
    icon: {
      focused: 'profileFill',
      unfocused: 'profile',
    },
  },
};
