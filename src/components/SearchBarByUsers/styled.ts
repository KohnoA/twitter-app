import styled from 'styled-components';

import { interactive } from '@/styles';

import { UserCard } from '../UserCard';

export const UserCardStyled = styled(UserCard)`
  margin-bottom: 0;
  padding: 15px;

  ${interactive()}
`;
