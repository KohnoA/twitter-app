import styled from 'styled-components';

import { flex, media, UserAvatar } from '@/styles';

import { ButtonWithSpinner, FileInput } from '../UI';

export const NewTweetContainer = styled.form`
  display: flex;
  gap: ${({ theme }) => theme.margins.md}px;

  width: 100%;
  padding: ${({ theme }) => theme.margins.md}px;

  border-bottom: 2px solid ${({ theme }) => theme.colors.bgSecondary};

  ${({ theme }) =>
    media('tablet')(`
    padding: ${theme.margins.sm}px;
  `)}
`;

export const UserAvatarStyled = styled(UserAvatar)`
  margin-top: 5px;

  ${media('mobileL')`
    display: none;
  `}
`;

export const ControlsWrapper = styled.div`
  flex-grow: 1;
`;

export const ButtonsWrapper = styled.div`
  ${flex('space-between', 'flex-start')}
`;

export const TweetButton = styled(ButtonWithSpinner)`
  max-width: 150px;
`;

export const FileContainer = styled.div`
  ${flex('flex-start', 'flex-start')}

  gap: ${({ theme }) => theme.margins.md}px;
`;

export const FileInputStyled = styled(FileInput)`
  padding: 7px;
  border: none;
`;

export const UploadedImage = styled.div<{ $imageUrl: string }>`
  width: 80px;
  height: 80px;

  background-image: url(${({ $imageUrl }) => $imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: ${({ theme }) => theme.radius.low}px;
`;
