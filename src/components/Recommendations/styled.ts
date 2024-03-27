import styled from 'styled-components';

import { flex, interactive } from '@/styles';

import { Paragraph, Title } from '../UI';
import { UserCard } from '../UserCard';

export const RecommendationsTitle = styled(Title)`
  margin-bottom: ${({ theme }) => theme.margins.sm}px;
  padding-bottom: ${({ theme }) => theme.margins.sm}px;

  border-bottom: 2px solid ${({ theme }) => theme.colors.bgSecondary};
`;

export const UserCardStyled = styled(UserCard)`
  margin-bottom: ${({ theme }) => theme.margins.sm}px;
`;

export const MoreButton = styled.button`
  margin-top: ${({ theme }) => theme.margins.md}px;

  font: inherit;
  color: ${({ theme }) => theme.colors.main};

  background-color: transparent;
  border: none;

  ${interactive()}
`;

export const LoaderContainer = styled.div`
  ${flex()}

  padding: ${({ theme }) => `${theme.margins.md}px 0`};
`;

export const EmptyMessage = styled(Paragraph)`
  margin-top: ${({ theme }) => theme.margins.md}px;

  text-align: center;
`;
