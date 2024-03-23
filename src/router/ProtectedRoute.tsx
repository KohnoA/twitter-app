import { Navigate, Outlet } from 'react-router-dom';

import { AppRoutes } from '@/constants';

interface ProtectedRouteProps {
  condition: boolean;
  redirectPath: AppRoutes;
}

export const ProtectedRoute = ({ condition, redirectPath }: ProtectedRouteProps) => {
  if (!condition) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
