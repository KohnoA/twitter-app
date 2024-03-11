import styled from 'styled-components';

import { flex, media } from '@/styles';

export const SignUpPasswordFormStyled = styled.form`
  width: 100%;
  margin-bottom: ${({ theme }) => `${theme.margins.xl}px`};
`;

export const ButtonsWrapper = styled.div`
  ${flex('stretch')}

  gap: ${({ theme }) => theme.margins.md}px;

  margin-top: ${({ theme }) => theme.margins.xl}px;

  ${({ theme }) =>
    media('tablet')(`
    flex-direction: column;

    gap: ${theme.margins.sm}px;

    margin-top: ${theme.margins.lg}px;
  `)}
`;
