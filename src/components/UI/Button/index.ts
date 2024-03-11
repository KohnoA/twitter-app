import styled from 'styled-components';

import { flex, interactive, media } from '@/styles';

interface ButtonProps {
  $view?: 'primary' | 'secondary';
}

export const Button = styled.button<ButtonProps>`
  ${flex()}

  gap: ${({ theme }) => theme.margins.sm}px;

  width: 100%;
  padding: 18px 0;

  font-size: ${({ theme }) => theme.fontSizes.xl2}px;
  font-weight: ${({ theme }) => theme.fontWeight.md};

  border: 1px solid ${({ theme }) => theme.colors.bgSecondaryDark};
  border-radius: ${({ theme }) => theme.radius.high}px;

  ${interactive()}

  ${({ theme, $view }) =>
    $view === 'primary'
      ? `
    color: ${theme.colors.text};
    background-color: transparent;
    border: 1px solid ${theme.colors.bgSecondaryDark};
  `
      : `
    color: ${theme.colors.textAlt};
    background-color: ${theme.colors.main};
    border: 1px solid ${theme.colors.main};
  `}

  ${({ theme }) =>
    media(`desktopL`)(`
    font-size: ${theme.fontSizes.xl}px;
  `)}

  ${({ theme }) =>
    media(`desktopM`)(`
    font-size: ${theme.fontSizes.lg}px;
  `)}

  ${media('tablet')`
    padding: 12px 0;
  `}
`;
