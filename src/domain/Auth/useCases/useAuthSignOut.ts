import {useAuthCredentialsService} from '@services';
import {useMutation} from '@tanstack/react-query';

import {authService} from '../AuthService';

export function useAuthSignOut() {
  const {removeCredentials} = useAuthCredentialsService();

  const mutation = useMutation<string, unknown, void>({
    mutationFn: authService.signOut,
    retry: false,
    onSuccess: () => {
      authService.removeToken();
      removeCredentials();
    },
  });

  return {
    isLoading: mutation.isLoading,
    signOut: () => mutation.mutate,
  };
}
