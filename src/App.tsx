import { ThemeProvider } from 'styled-components';

import { AppLoader } from './components/UI';
import { themeSelector } from './store/selectors';
import { useAppSelector, useAuth } from './hooks';
import { AppRouter } from './router';
import { FontsStyles, getTheme, GlobalStyles } from './styles';

const App = () => {
  const { theme } = useAppSelector(themeSelector);
  const { isLoading } = useAuth();

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <FontsStyles />
      <GlobalStyles />
      {isLoading ? <AppLoader /> : <AppRouter />}
    </ThemeProvider>
  );
};

export default App;
