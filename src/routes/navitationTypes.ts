import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AppStackParamListTypes} from './AppStack';
import {AuthStackParamListTypes} from './AuthStack';

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends AuthStackParamListTypes,
        AppStackParamListTypes {}
  }
}

export type AppScreenProps<RouteName extends keyof AppStackParamListTypes> =
  NativeStackScreenProps<AppStackParamListTypes, RouteName>;

export type AuthScreenProps<RouteName extends keyof AuthStackParamListTypes> =
  NativeStackScreenProps<AuthStackParamListTypes, RouteName>;
