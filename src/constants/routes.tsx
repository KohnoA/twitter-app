import { Navigate } from 'react-router-dom';

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

import { AppRoutes } from './app';

export const unauthorizedRoutes = [
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

export const authorizedRoutes = [
  {
    id: 1,
    path: AppRoutes.ROOT,
    element: <Navigate to={AppRoutes.HOME} replace />,
  },
  {
    id: 2,
    path: AppRoutes.EXPLORE,
    element: <ExplorePage />,
  },
  {
    id: 3,
    path: AppRoutes.NOTIFICATION,
    element: <NotificationsPage />,
  },
  {
    id: 4,
    path: AppRoutes.MESSAGES,
    element: <MessagesPage />,
  },
  {
    id: 5,
    path: AppRoutes.BOOKMARKS,
    element: <BookmarksPage />,
  },
  {
    id: 6,
    path: AppRoutes.LISTS,
    element: <ListsPage />,
  },
  {
    id: 7,
    path: AppRoutes.MORE,
    element: <MorePage />,
  },
  {
    id: 8,
    path: AppRoutes.HOME,
    element: <HomePage />,
  },
  {
    id: 9,
    path: `${AppRoutes.HOME}/:tweetId`,
    element: <TweetPage />,
  },
  {
    id: 10,
    path: AppRoutes.PROFILE,
    element: <ProfilePage />,
  },
  {
    id: 11,
    path: `${AppRoutes.PROFILE}/:userId`,
    element: <ProfilePage />,
  },
];
