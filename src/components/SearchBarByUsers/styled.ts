import styled from 'styled-components';

import { interactive } from '@/styles';

import { ElasticSearch } from '../UI';
import { UserCard } from '../UserCard';

export const ElasticSearchStyled = styled(ElasticSearch)`
  margin-bottom: ${({ theme }) => theme.margins.xl}px;
`;

export const UserCardStyled = styled(UserCard)`
  margin-bottom: 0;
  padding: 15px;

  ${interactive()}
`;
