import { AppRoutes } from './app';
import { ICONS } from './icons';

const {
  HomeOutlineIcon,
  HomeFillIcon,
  ExploreFillIcon,
  ExploreOutlineIcon,
  NotificationFillIcon,
  NotificationOutlineIcon,
  MessagesFillIcon,
  MessagesOutlineIcon,
  BookmarksOutlineIcon,
  ListsFillIcon,
  ListsOutlineIcon,
  ProfileOutlineIcon,
  ProfileFillIcon,
  MoreOutlineIcon,
  BookmarksFillIcon,
} = ICONS;

export const NAVIGATION_LIST = [
  { link: AppRoutes.HOME, OutlineIcon: HomeOutlineIcon, FillIcon: HomeFillIcon, title: 'Home' },
  {
    link: AppRoutes.EXPLORE,
    OutlineIcon: ExploreOutlineIcon,
    FillIcon: ExploreFillIcon,
    title: 'Explore',
  },
  {
    link: AppRoutes.NOTIFICATION,
    OutlineIcon: NotificationOutlineIcon,
    FillIcon: NotificationFillIcon,
    title: 'Notification',
  },
  {
    link: AppRoutes.MESSAGES,
    OutlineIcon: MessagesOutlineIcon,
    FillIcon: MessagesFillIcon,
    title: 'Messages',
  },
  {
    link: AppRoutes.BOOKMARKS,
    OutlineIcon: BookmarksOutlineIcon,
    FillIcon: BookmarksFillIcon,
    title: 'Bookmarks',
  },
  {
    link: AppRoutes.LISTS,
    OutlineIcon: ListsOutlineIcon,
    FillIcon: ListsFillIcon,
    title: 'Lists',
  },
  {
    link: AppRoutes.PROFILE,
    OutlineIcon: ProfileOutlineIcon,
    FillIcon: ProfileFillIcon,
    title: 'Profile',
  },
  {
    link: AppRoutes.MORE,
    OutlineIcon: MoreOutlineIcon,
    FillIcon: MoreOutlineIcon,
    title: 'More',
  },
];
