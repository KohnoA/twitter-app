export interface ProfileProps {
  userId: string;
  isOwner: boolean;
}

export interface ProfileBgProps {
  $bgUrl?: string;
}

export interface UserAvatarProps {
  $avatarUrl?: string | null;
}
