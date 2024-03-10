import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { interactive } from '@/styles';

export const MyLink = styled(Link)`
  color: ${({ theme }) => theme.colors.main};

  ${interactive()}
`;
