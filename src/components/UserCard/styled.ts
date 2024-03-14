import styled from 'styled-components';

import defaultAvatar from '@/assets/images/default-avatar.png';
import { flex, media } from '@/styles';

export const UserCardWrapper = styled.div`
  ${flex('flex-start')}

  gap: ${({ theme }) => theme.margins.md}px;

  width: 100%;
  margin-bottom: ${({ theme }) => theme.margins.lg}px;
  padding: 5px;

  ${({ theme }) =>
    media('desktopM')(`
    padding: 2px;

    gap: ${theme.margins.sm}px;
  `)}
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

  ${media(`desktopM`)`
    width: 40px;
    height: 40px;
  `}
`;

export const NameEmailWrapper = styled.div`
  min-width: 0;
`;

export const UserName = styled.p`
  margin-bottom: 5px;

  font-weight: ${({ theme }) => theme.fontWeight.bd};
`;

export const UserEmail = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: ${({ theme }) => theme.colors.bgSecondaryDark};
`;
