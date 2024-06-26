import styled from 'styled-components';

import { media } from '@/styles';

import { ButtonWithSpinner, ErrorMessage, MyLink } from '../UI';

export const LoginFormStyled = styled.form`
  width: 100%;
  margin-bottom: ${({ theme }) => `${theme.margins.xl}px`};
`;

export const LoginButton = styled(ButtonWithSpinner)`
  margin-top: ${({ theme }) => theme.margins.md}px;
  margin-bottom: ${({ theme }) => theme.margins.xl}px;

  ${({ theme }) => media('tablet')(`margin-bottom: ${theme.margins.md}px;`)}
`;

export const SignUpLink = styled(MyLink)`
  float: inline-end;
`;

export const GeneralErrorMessage = styled(ErrorMessage)`
  text-align: center;
`;
