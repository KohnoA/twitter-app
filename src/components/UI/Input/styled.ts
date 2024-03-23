import styled from 'styled-components';

import { flex, media } from '@/styles';

import { InputStyledProps } from './types';

export const InputWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.margins.md}px;

  ${({ theme }) =>
    media('tablet')(`
    margin-bottom: ${theme.margins.sm}px;
  `)}
`;

export const PositionInputWrapper = styled.div`
  position: relative;

  width: 100%;
`;

export const InputStyled = styled.input<InputStyledProps>`
  width: 100%;
  padding: ${({ theme }) => theme.margins.md}px;
  padding-right: 60px;

  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  color: ${({ theme }) => theme.colors.text};

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
    border-color: ${theme.colors.stroke};
  `}

  &:focus {
    outline: 1px solid ${({ theme, $hasError }) => ($hasError ? 'transparent' : theme.colors.text)};
  }

  ${({ theme }) =>
    media('tablet')(`
    padding: ${theme.margins.sm}px;
    padding-right: 40px;

    font-size: ${theme.fontSizes.md}px;
  `)}
`;

export const VisibilityButton = styled.button`
  position: absolute;

  top: 50%;
  right: 16px;
  transform: translateY(-50%);

  ${flex()}

  padding: 3px;

  background-color: transparent;
  border: none;
  cursor: pointer;

  & svg {
    width: 25px;
    height: 25px;

    transition: opacity ${({ theme }) => theme.duration}ms;
    opacity: ${({ theme }) => theme.opacity.high};

    & path {
      transform: scale(0.53);
      fill: ${({ theme }) => theme.colors.text};
    }
  }

  &:hover {
    & svg {
      opacity: 1;
    }
  }

  ${media('tablet')`
    right: 8px;

    padding: 0;

    & svg {
      width: 20px;
      height: 20px;

      & path {
        transform: scale(0.4);
      }
    }
  `}
`;
