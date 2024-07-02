import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AppStackParamListTypes} from './AppStack';
import {AppTabBottomTabParamListTypes} from './AppTabNavigator';
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

export type AppTabScreenProps<
  RouteName extends keyof AppTabBottomTabParamListTypes,
> = CompositeScreenProps<
  BottomTabScreenProps<AppTabBottomTabParamListTypes, RouteName>,
  NativeStackScreenProps<AppStackParamListTypes, 'AppTabNavigator'>
>;
