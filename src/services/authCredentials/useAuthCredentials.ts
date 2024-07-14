import {useContext} from 'react';

import {AuthCredentialsService} from './authCredentialsTypes';
import {AuthCredentialsContext} from './Providers/AuthCredentialsProvider';

export function useAuthCredentialsService(): AuthCredentialsService {
  const context = useContext(AuthCredentialsContext);
  if (!context) {
    throw new Error(
      'AuthCredentials shoud be used within a AuthCredentialsProvider',
    );
  }

  return context;
}

// const useAuthCredentialsZustend = create<AuthCredentialsService>()(
//   persist(
//     set => ({
//       authCredentials: null,
//       isLoading: false,
//       saveCredentials: async ac => set({authCredentials: ac}),
//       removeCredentials: async () => set({authCredentials: null}),
//     }),
//     {
//       name: '@Auth',
//       storage: storage,
//     },
//   ),
// );
