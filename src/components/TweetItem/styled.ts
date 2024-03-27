import styled from 'styled-components';

import { Title } from '@/components/UI';
import { flex, interactive, media, UserAvatar } from '@/styles';

import { LikeButtonProps } from './types';

export const TweetItemContainer = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.margins.sm}px;

  padding: ${({ theme }) => theme.margins.md}px;

  border-bottom: 2px solid ${({ theme }) => theme.colors.bgSecondary};

  &:last-child {
    border-bottom: none;
  }

  ${({ theme }) =>
    media('tablet')(`
      display: grid;
      grid-template-columns: 1fr 1fr;

      padding: ${theme.margins.md}px ${theme.margins.sm}px;

      font-size: ${theme.fontSizes.md}px;
  `)}
`;

export const UserAvatarStyled = styled(UserAvatar)`
  flex-shrink: 0;

  margin-top: 5px;
  margin-right: 5px;

  ${media('tablet')(`
    order: 1;
    margin-top: 0;
    margin-right: 0;
  `)}
`;

export const TweetItemContent = styled.div`
  flex-grow: 1;

  ${media('tablet')`
    order: 3;
    grid-column: span 2;
    width: 100%;

    padding-top: 10px;
  `}
`;

export const TweetInfo = styled.div`
  ${flex('flex-start')}

  gap: ${({ theme }) => theme.margins.sm}px;

  margin-bottom: ${({ theme }) => theme.margins.sm}px;

  ${media('tablet')`
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  `}
`;

export const UserName = styled(Title)`
  margin: 0;

  ${({ theme }) =>
    media('tablet')(`
    font-size: ${theme.fontSizes.lg}px;
  `)}
`;

export const EmailAndDate = styled.p`
  color: ${({ theme }) => theme.colors.stroke};
`;

export const LikeButton = styled.button<LikeButtonProps>`
  ${flex()}
  ${interactive()}

  gap: 5px;

  padding: 5px;

  font-size: ${({ theme }) => theme.fontSizes.lg}px;
  color: ${({ theme }) => theme.colors.textInput};

  background-color: transparent;
  border: none;

  & svg {
    width: 24px;
    height: 24px;

    & path {
      fill: ${({ theme, $isActive }) => !$isActive && theme.colors.textInput};
    }
  }

  ${media('tablet')`
     & svg {
      width: 20px;
      height: 20px;
     }
  `}
`;

export const TweetPhoto = styled.img`
  width: 90%;
  height: auto;

  margin-bottom: ${({ theme }) => theme.margins.md}px;

  border-radius: ${({ theme }) => theme.radius.low}px;

  ${media('tablet')(`
    width: 100%;
  `)}
`;
