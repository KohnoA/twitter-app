import { UserDataType } from '@/types';

export interface ProfileProps {
  user: UserDataType;
}

export interface ProfileBgProps {
  $bgUrl?: string;
}

export interface UserAvatarProps {
  $avatarUrl?: string | null;
}
