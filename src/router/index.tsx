import { Route, Routes } from 'react-router-dom';

import { AppRoutes } from '@/constants';
import { useAppSelector } from '@/hooks';
import { NotFoundPage } from '@/pages';
import { userSelector } from '@/store/selectors';

import { ProtectedRoute } from './ProtectedRoute';
import { PROTECTED_ROUTES, PUBLIC_ROUTES } from './routes';

export const AppRouter = () => {
  const { isAuth } = useAppSelector(userSelector);

  return (
    <Routes>
      <Route element={<ProtectedRoute condition={!isAuth} redirectPath={AppRoutes.HOME} />}>
        {PUBLIC_ROUTES.map((routeProps) => (
          <Route key={routeProps.path} {...routeProps} />
        ))}
      </Route>

      <Route element={<ProtectedRoute condition={isAuth} redirectPath={AppRoutes.SIGN_UP} />}>
        {PROTECTED_ROUTES.map((routeProps) => (
          <Route key={routeProps.path} {...routeProps} />
        ))}
      </Route>

      <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
};
