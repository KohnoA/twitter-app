import { Navigate, Route, Routes } from 'react-router-dom';

import { AppRoutes } from '@/constants';
import { useAppSelector } from '@/hooks';
import {
  BookmarksPage,
  ExplorePage,
  HomePage,
  ListsPage,
  LoginPage,
  MessagesPage,
  MorePage,
  NotFoundPage,
  NotificationsPage,
  ProfilePage,
  SignUpEmailPage,
  SignUpPage,
} from '@/pages';
import { userSelector } from '@/store/selectors';

import { ProtectedRoute } from './ProtectedRoute';

export const AppRouter = () => {
  const { isAuth } = useAppSelector(userSelector);

  return (
    <Routes>
      <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />

      <Route element={<ProtectedRoute condition={!isAuth} redirectPath={AppRoutes.HOME} />}>
        <Route path={AppRoutes.ROOT} element={<Navigate to={AppRoutes.SIGN_UP} replace />} />
        <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
        <Route path={AppRoutes.SIGN_UP} element={<SignUpPage />} />
        <Route path={AppRoutes.SIGN_UP_EMAIL} element={<SignUpEmailPage />} />
      </Route>

      <Route element={<ProtectedRoute condition={isAuth} redirectPath={AppRoutes.SIGN_UP} />}>
        <Route path={AppRoutes.ROOT} element={<Navigate to={AppRoutes.HOME} replace />} />
        <Route path={AppRoutes.HOME} element={<HomePage />} />
        <Route path={AppRoutes.EXPLORE} element={<ExplorePage />} />
        <Route path={AppRoutes.PROFILE} element={<ProfilePage />} />
        <Route path={AppRoutes.NOTIFICATION} element={<NotificationsPage />} />
        <Route path={AppRoutes.MESSAGES} element={<MessagesPage />} />
        <Route path={AppRoutes.BOOKMARKS} element={<BookmarksPage />} />
        <Route path={AppRoutes.LISTS} element={<ListsPage />} />
        <Route path={AppRoutes.MORE} element={<MorePage />} />
      </Route>
    </Routes>
  );
};
