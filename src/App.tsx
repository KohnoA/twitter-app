import { ThemeProvider } from 'styled-components';

import { themeSelector } from './store/selectors';
import { useAppSelector } from './hooks';
import { AppRouter } from './router';
import { FontsStyles, getTheme, GlobalStyles } from './styles';

const App = () => {
  const { theme } = useAppSelector(themeSelector);

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <FontsStyles />
      <GlobalStyles />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
