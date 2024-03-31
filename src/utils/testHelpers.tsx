import { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { AppThemes } from '@/constants';
import { store } from '@/store';
import { getTheme } from '@/styles';

interface AllTheProvidersProps {
  children: ReactNode;
}

const AllTheProviders = ({ children }: AllTheProvidersProps) => (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={getTheme(AppThemes.LIGHT)}>{children}</ThemeProvider>
    </BrowserRouter>
  </Provider>
);

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
