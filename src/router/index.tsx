import { Navigate, Route, Routes } from 'react-router-dom';

import { AppRoutes } from '@/constants';
import { Login, SignUp } from '@/pages';

export const AppRouter = () => (
  <Routes>
    <Route path={AppRoutes.ROOT} element={<Navigate to={AppRoutes.SIGN_UP} replace />} />
    <Route path={AppRoutes.LOGIN} element={<Login />} />
    <Route path={AppRoutes.SIGN_UP} element={<SignUp />} />
  </Routes>
);
