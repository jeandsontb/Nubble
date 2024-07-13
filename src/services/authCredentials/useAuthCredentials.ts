import {create} from 'zustand';

import {AuthCredentialsService} from './authCredentialsTypes';

export function useAuthCredentialsService(): AuthCredentialsService {
  return useAuthCredentialsZustend();
}

const useAuthCredentialsZustend = create<AuthCredentialsService>(set => ({
  authCredentials: null,
  isLoading: false,
  saveCredentials: async ac => set({authCredentials: ac}),
  removeCredentials: async () => set({authCredentials: null}),
}));
