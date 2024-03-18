import styled from 'styled-components';

import defaultAvatar from '@/assets/images/default-avatar.png';
import { flex, interactive } from '@/styles';

import { Textaria, Title } from '../UI';

interface UserAvatarProps {
  $avatarUrl?: string | null;
}

export const EditProfileFormContainer = styled.form``;

export const FormTitle = styled(Title)`
  margin-bottom: ${({ theme }) => theme.margins.sm}px;
`;

export const ButtonsWrapper = styled.div`
  ${flex('stretch')}

  gap: ${({ theme }) => theme.margins.sm}px;

  margin-top: ${({ theme }) => theme.margins.lg}px;
`;

export const BirthdayLabel = styled.p`
  margin-bottom: ${({ theme }) => theme.margins.sm}px;
`;

export const BirthdaySelectsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr 0.5fr;
  gap: ${({ theme }) => theme.margins.md}px;

  margin-bottom: ${({ theme }) => theme.margins.md}px;
`;

export const AvatarWrapper = styled.div`
  ${flex()}

  margin-bottom: ${({ theme }) => theme.margins.md}px;
`;

export const UserAvatar = styled.div<UserAvatarProps>`
  position: relative;

  width: 100px;
  height: 100px;
  margin-top: 5px;

  background-image: url(${({ $avatarUrl }) => $avatarUrl ?? defaultAvatar});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 50%;
`;

export const TextariaStyled = styled(Textaria)`
  border-color: ${({ theme }) => theme.colors.stroke};
  border-width: 1px;
`;

export const EditPhotoButton = styled.button`
  ${flex()}
  ${interactive()}

  position: absolute;
  right: -5px;
  bottom: -5px;

  padding: 5px;

  background-color: ${({ theme }) => theme.colors.bgPrimary};
  border: 1px solid ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.radius.low}px;
  cursor: pointer;

  & svg {
    width: 24px;
    height: 24px;

    & path {
      fill: ${({ theme }) => theme.colors.main};
    }
  }
`;

export const FileInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
`;
