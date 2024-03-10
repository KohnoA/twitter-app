import styled from 'styled-components';

import { flex, interactive } from '@/styles';

interface ButtonProps {
  $view?: 'primary' | 'secondary';
}

export const Button = styled.button<ButtonProps>`
  ${flex()}

  gap: ${({ theme }) => theme.margins.sm}px;

  width: 100%;
  padding: 15px 0;

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

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopL}px) {
    font-size: ${({ theme }) => theme.fontSizes.xl}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopM}px) {
    font-size: ${({ theme }) => theme.fontSizes.lg}px;
  }
`;
