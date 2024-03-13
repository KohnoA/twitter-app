import styled from 'styled-components';

import defaultAvatar from '@/assets/images/default-avatar.png';
import { flex } from '@/styles';

export const UserCardWrapper = styled.div`
  ${flex('flex-start')}

  gap: ${({ theme }) => theme.margins.md}px;

  max-width: 280px;
  margin-bottom: ${({ theme }) => theme.margins.lg}px;
  padding: ${({ theme }) => theme.margins.sm}px;
`;

export const UserAvatar = styled.div`
  flex-shrink: 0;

  width: 50px;
  height: 50px;

  background-image: url(${defaultAvatar});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 50%;
`;

export const UserName = styled.p`
  margin-bottom: 5px;

  font-weight: ${({ theme }) => theme.fontWeight.bd};
`;

export const UserEmail = styled.p`
  color: ${({ theme }) => theme.colors.bgSecondaryDark};
`;
