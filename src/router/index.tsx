import { Navigate, Route, Routes } from 'react-router-dom';

import { AppRoutes } from '@/constants';
import { LoginPage, SignUpEmailPage, SignUpPage } from '@/pages';

export const AppRouter = () => (
  <Routes>
    <Route path={AppRoutes.ROOT} element={<Navigate to={AppRoutes.SIGN_UP} replace />} />
    <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
    <Route path={AppRoutes.SIGN_UP} element={<SignUpPage />} />
    <Route path={AppRoutes.SIGN_UP_EMAIL} element={<SignUpEmailPage />} />
  </Routes>
);
