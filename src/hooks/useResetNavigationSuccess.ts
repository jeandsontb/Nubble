import {useNavigation} from '@react-navigation/native';

import {AuthStackParamListTypes} from '@routes';

export const useResetNavigationSuccess = () => {
  const navigation = useNavigation();

  const reset = (params: AuthStackParamListTypes['SuccessScreen']) => {
    navigation.reset({
      index: 1,
      routes: [
        {
          name: 'LoginScreen',
        },
        {
          name: 'SuccessScreen',
          params,
        },
      ],
    });
  };

  return {reset};
};
