import { Navigate } from 'react-router-dom';

import { AppRoutes } from '@/constants';
import {
  BookmarksPage,
  ExplorePage,
  HomePage,
  ListsPage,
  LoginPage,
  MessagesPage,
  MorePage,
  NotificationsPage,
  ProfilePage,
  SignUpEmailPage,
  SignUpPage,
  TweetPage,
} from '@/pages';

export const PUBLIC_ROUTES = [
  {
    path: AppRoutes.ROOT,
    element: <Navigate to={AppRoutes.SIGN_UP} replace />,
  },
  {
    path: AppRoutes.LOGIN,
    element: <LoginPage />,
  },
  {
    path: AppRoutes.SIGN_UP,
    element: <SignUpPage />,
  },
  {
    path: AppRoutes.SIGN_UP_EMAIL,
    element: <SignUpEmailPage />,
  },
];

export const PROTECTED_ROUTES = [
  {
    path: AppRoutes.ROOT,
    element: <Navigate to={AppRoutes.HOME} replace />,
  },
  {
    path: AppRoutes.EXPLORE,
    element: <ExplorePage />,
  },
  {
    path: AppRoutes.NOTIFICATION,
    element: <NotificationsPage />,
  },
  {
    path: AppRoutes.MESSAGES,
    element: <MessagesPage />,
  },
  {
    path: AppRoutes.BOOKMARKS,
    element: <BookmarksPage />,
  },
  {
    path: AppRoutes.LISTS,
    element: <ListsPage />,
  },
  {
    path: AppRoutes.MORE,
    element: <MorePage />,
  },
  {
    path: AppRoutes.HOME,
    element: <HomePage />,
  },
  {
    path: `${AppRoutes.HOME}/:tweetId`,
    element: <TweetPage />,
  },
  {
    path: AppRoutes.PROFILE,
    element: <ProfilePage />,
  },
  {
    path: `${AppRoutes.PROFILE}/:userId`,
    element: <ProfilePage />,
  },
];
