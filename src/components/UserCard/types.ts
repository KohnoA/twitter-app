import { UserDataType } from '@/types';

export interface UserCardProps {
  className?: string;
  user: UserDataType | null;
}

export interface UserCardWrapperProps {
  $isOwner?: boolean;
}
