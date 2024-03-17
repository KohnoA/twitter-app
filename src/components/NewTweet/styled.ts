import styled from 'styled-components';

import defaultAvatar from '@/assets/images/default-avatar.png';
import { flex, interactive } from '@/styles';

import { Button } from '../UI';

import { UserAvatarProps } from './types';

export const NewTweetContainer = styled.section`
  display: flex;
  gap: ${({ theme }) => theme.margins.md}px;

  width: 100%;
  padding: ${({ theme }) => theme.margins.md}px;

  border-bottom: 2px solid ${({ theme }) => theme.colors.bgSecondary};
`;

export const UserAvatar = styled.div<UserAvatarProps>`
  width: 50px;
  height: 50px;
  margin-top: 5px;

  background-image: url(${({ $avatarUrl }) => $avatarUrl ?? defaultAvatar});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ControlsWrapper = styled.div`
  flex-grow: 1;
`;

export const TextariaStyled = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.margins.sm}px;
  margin-bottom: ${({ theme }) => theme.margins.sm}px;

  font: inherit;
  color: ${({ theme }) => theme.colors.text};

  background-color: ${({ theme }) => theme.colors.bgPrimary};
  border: 2px solid ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.radius.low}px;
  resize: none;

  &::placeholder {
    font-size: ${({ theme }) => theme.fontSizes.xl2}px;
    font-weight: ${({ theme }) => theme.fontWeight.bd};
  }
`;

export const ButtonsWrapper = styled.div`
  ${flex('space-between', 'flex-start')}
`;

export const AddImageButton = styled.button`
  ${flex()}
  ${interactive()}

  padding: 5px;

  background-color: transparent;
  border: none;

  & svg {
    width: 25px;
    height: 25px;

    & path {
      fill: ${({ theme }) => theme.colors.main};
    }
  }
`;

export const TweetButton = styled(Button)`
  max-width: 150px;
`;
