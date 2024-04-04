export interface ProfileProps {
  userId: string;
  isOwner: boolean;
  tweetsCount?: number | string;
}

export interface ProfileBgProps {
  $bgUrl?: string;
}
