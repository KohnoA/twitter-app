import styled from 'styled-components';

import { flex } from '@/styles';

import { ErrorMessage } from '../UI';

export const ButtonsWrapper = styled.div`
  ${flex('stretch')}

  gap: ${({ theme }) => theme.margins.sm}px;

  margin-top: ${({ theme }) => theme.margins.xl}px;
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  text-align: center;
`;
