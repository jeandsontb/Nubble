import React from 'react';

import {
  AuthCredentialProvider,
  initializedStorage,
  MMKVStorage,
  ToastProvider,
} from '@services';
import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';

import {Routes} from './src/routes/Routes';
import {theme} from './src/theme/theme';

const queryClient = new QueryClient();

initializedStorage(MMKVStorage);

function App(): React.JSX.Element {
  return (
    <AuthCredentialProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            <ToastProvider>
              <Routes />
              <Toast />
            </ToastProvider>
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AuthCredentialProvider>
  );
}

export default App;
