import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { interactive, media } from '@/styles';

export const MyLink = styled(Link)`
  color: ${({ theme }) => theme.colors.main};

  ${interactive()}

  ${({ theme }) =>
    media(`tablet`)(`
    font-size: ${theme.fontSizes.md}px;
  `)}
`;
