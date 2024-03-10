import styled from 'styled-components';

import { media } from '@/styles';

interface InputProps {
  $hasError?: boolean;
}

export const Input = styled.input<InputProps>`
  width: 100%;
  padding: ${({ theme }) => theme.margins.md}px;
  margin-bottom: ${({ theme }) => theme.margins.md}px;

  font-size: ${({ theme }) => theme.fontSizes.xl}px;

  border-width: 1px;
  border-style: solid;
  border-radius: ${({ theme }) => theme.radius.low}px;
  background-color: ${({ theme }) => theme.colors.bgPrimary};

  ${({ theme, $hasError }) =>
    $hasError
      ? `
    border-color: ${theme.colors.error};
  `
      : `
    border-color: ${theme.colors.bgSecondaryDark};
  `}

  &:focus {
    outline: 1px solid
      ${({ theme, $hasError }) => ($hasError ? theme.colors.error : theme.colors.text)};
  }

  ${({ theme }) =>
    media('tablet')(`
    padding: ${theme.margins.sm}px;

    font-size: ${theme.fontSizes.md}px;
  `)}
`;