import React, {ReactElement} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';
import {render, RenderOptions} from '@testing-library/react-native';

import {theme} from '@theme';

const AllThemeProvider = ({children}: {children: React.ReactNode}) => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>{children}</NavigationContainer>{' '}
    </ThemeProvider>
  );
};

function customRender<T = unknown>(
  component: ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(component, {wrapper: AllThemeProvider, ...options});
}

export * from '@testing-library/react-native';
export {customRender as render};
