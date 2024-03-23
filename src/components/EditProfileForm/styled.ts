import styled from 'styled-components';

import { flex, UserAvatar } from '@/styles';

import { FileInput, Textaria, Title } from '../UI';

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

export const UserAvatarStyled = styled(UserAvatar)`
  width: 100px;
  height: 100px;
  margin-top: 5px;
`;

export const TextariaStyled = styled(Textaria)`
  border-color: ${({ theme }) => theme.colors.stroke};
  border-width: 1px;
`;

export const FileInputStyled = styled(FileInput)`
  position: absolute;
  right: -5px;
  bottom: -5px;
`;
