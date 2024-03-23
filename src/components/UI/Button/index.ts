import styled from 'styled-components';

import { flex, interactive, media } from '@/styles';

import { ButtonProps } from './types';

export const Button = styled.button<ButtonProps>`
  position: relative;

  ${flex()}

  gap: ${({ theme }) => theme.margins.sm}px;

  width: 100%;
  padding: 18px 0;

  font-size: ${({ theme }) => theme.fontSizes.xl2}px;
  font-weight: ${({ theme }) => theme.fontWeight.md};

  border: 1px solid ${({ theme }) => theme.colors.stroke};
  border-radius: ${({ theme }) => theme.radius.high}px;

  ${interactive()}

  ${({ theme, $view }) =>
    $view === 'primary'
      ? `
    color: ${theme.colors.text};
    background-color: transparent;
    border: 1px solid ${theme.colors.stroke};
  `
      : `
    color: ${theme.colors.textAlt};
    background-color: ${theme.colors.main};
    border: 1px solid ${theme.colors.main};
  `}

  &:disabled {
    pointer-events: none;
    opacity: ${({ theme }) => theme.opacity.low};
  }

  ${({ theme }) =>
    media(`desktopL`)(`
    padding: 16px 0;
    
    font-size: ${theme.fontSizes.xl}px;
  `)}

  ${({ theme }) =>
    media(`desktopM`)(`
    padding: 14px 0;

    font-size: ${theme.fontSizes.lg}px;
  `)}

  ${media('tablet')`
    padding: 12px 0;
  `}
`;
