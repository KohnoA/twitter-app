import styled from 'styled-components';

import { media } from '@/styles';

export const ErrorMessage = styled.p`
  padding: 5px;

  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSizes.lg}px;

  ${({ theme }) => media('tablet')(`font-size: ${theme.fontSizes.sm}px`)}
`;
