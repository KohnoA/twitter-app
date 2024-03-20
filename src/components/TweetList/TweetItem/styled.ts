import styled from 'styled-components';

import defaultAvatar from '@/assets/images/default-avatar.png';
import { Title } from '@/components/UI';
import { flex, interactive } from '@/styles';

interface UserAvatarProps {
  $avatarUrl?: string | null;
}

interface LikeButtonProps {
  $isActive?: boolean;
}

export const TweetItemContainer = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.margins.sm}px;

  padding: ${({ theme }) => theme.margins.md}px;

  border-bottom: 2px solid ${({ theme }) => theme.colors.bgSecondary};

  &:last-child {
    border-bottom: none;
  }
`;

export const UserAvatar = styled.div<UserAvatarProps>`
  flex-shrink: 0;

  width: 50px;
  height: 50px;
  margin-top: 5px;
  margin-right: 5px;

  background-image: url(${({ $avatarUrl }) => $avatarUrl ?? defaultAvatar});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 50%;
`;

export const TweetItemContent = styled.div`
  flex-grow: 1;
`;

export const TweetInfo = styled.div`
  ${flex('flex-start')}
  gap: ${({ theme }) => theme.margins.sm}px;

  margin-bottom: ${({ theme }) => theme.margins.sm}px;
`;

export const UserName = styled(Title)`
  margin: 0;
`;

export const EmailAndDate = styled.p`
  color: ${({ theme }) => theme.colors.stroke};
`;

const TweetButton = styled.button`
  ${flex()}
  ${interactive()}

  background-color: transparent;
  border: none;
`;

export const LikeButton = styled(TweetButton)<LikeButtonProps>`
  gap: 5px;

  padding: 5px;

  font-size: ${({ theme }) => theme.fontSizes.lg}px;
  color: ${({ theme }) => theme.colors.textInput};

  & svg {
    width: 24px;
    height: 24px;

    & path {
      fill: ${({ theme, $isActive }) => !$isActive && theme.colors.textInput};
    }
  }
`;

export const MoreButton = styled(TweetButton)`
  padding: 5px 10px;

  & svg {
    width: 20px;
    height: 20px;

    & path {
      fill: ${({ theme }) => theme.colors.text};
    }
  }
`;

export const TweetPhoto = styled.img`
  width: 90%;
  height: auto;

  margin-bottom: ${({ theme }) => theme.margins.md}px;

  border-radius: ${({ theme }) => theme.radius.low}px;
`;
