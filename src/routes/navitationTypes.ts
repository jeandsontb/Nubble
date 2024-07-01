import {RootStackParamListTypes} from './Routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamListTypes {}
  }
}
