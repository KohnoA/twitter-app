import styled from 'styled-components';

import defaultAvatar from '@/assets/images/default-avatar.png';
import defaultBg from '@/assets/images/default-profile-bg.jpg';
import { flex } from '@/styles';

import { Button, Title } from '../UI';

import { ProfileBgProps, UserAvatarProps } from './types';

export const ProfileWrapper = styled.section`
  border-bottom: 2px solid ${({ theme }) => theme.colors.bgSecondary};
`;

export const ProfileBg = styled.div<ProfileBgProps>`
  width: 100%;
  height: 280px;

  background-image: url(${({ $bgUrl }) => $bgUrl ?? defaultBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const EditWrapper = styled.div`
  position: relative;

  ${flex('flex-end')}

  padding: ${({ theme }) => theme.margins.md}px;
`;

export const UserAvatar = styled.div<UserAvatarProps>`
  position: absolute;

  left: 10px;
  bottom: 10px;

  width: 150px;
  height: 150px;

  background-image: url(${({ $avatarUrl }) => $avatarUrl ?? defaultAvatar});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 50%;
`;

export const EditButton = styled(Button)`
  width: 150px;
`;

export const UserInfoWrapper = styled.section`
  padding: ${({ theme }) => `${theme.margins.sm}px ${theme.margins.md}px`};
`;

export const UserName = styled(Title)`
  margin-bottom: 5px;

  font-size: 24px;
`;

export const UserEmail = styled.p`
  margin-bottom: ${({ theme }) => theme.margins.md}px;

  color: ${({ theme }) => theme.colors.stroke};
`;

export const UserFollowsInfoList = styled.ul`
  ${flex('flex-start')}

  flex-wrap: wrap;
  gap: ${({ theme }) => theme.margins.lg}px;

  padding: ${({ theme }) => `${theme.margins.xl}px ${theme.margins.md}px`};
`;

export const UserFollowesInfoItem = styled.li`
  color: ${({ theme }) => theme.colors.stroke};

  & span {
    color: ${({ theme }) => theme.colors.text};
    font-weight: ${({ theme }) => theme.fontWeight.bk};
  }
`;
