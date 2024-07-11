import {useContext} from 'react';

import {ToastContext} from './providers/ToastProvider';
import {ToastService} from './toastTypes';

export function useToastContext(): ToastService {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('Toast must be used within a ToastProvider');
  }

  return context;
}
