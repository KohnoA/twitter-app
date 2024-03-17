import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { ThemeProvider } from 'styled-components';

import { AppLoader } from './components/UI';
import { themeSelector } from './store/selectors';
import { setIsAuth, setIsNotAuth } from './store/slices';
import { auth } from './firebase';
import { useAppDispatch, useAppSelector } from './hooks';
import { AppRouter } from './router';
import { FontsStyles, getTheme, GlobalStyles } from './styles';

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { theme } = useAppSelector(themeSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch(user ? setIsAuth() : setIsNotAuth());
      setIsLoading(false);
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <FontsStyles />
      <GlobalStyles />
      {isLoading ? <AppLoader /> : <AppRouter />}
    </ThemeProvider>
  );
};

export default App;
