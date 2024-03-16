import styled from 'styled-components';

import { ICONS } from '@/constants';
import { interactive, media } from '@/styles';

import { SelectStyledProps } from './types';

const { ArrowDownIcon } = ICONS;

export const PositionWrapper = styled.div`
  position: relative;
`;

export const SelectStyled = styled.select<SelectStyledProps>`
  width: 100%;
  padding: ${({ theme }) => theme.margins.md}px;
  padding-right: 50px;

  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  color: ${({ theme }) => theme.colors.text};

  border-width: 1px;
  border-style: solid;
  border-radius: ${({ theme }) => theme.radius.low}px;
  background-color: ${({ theme }) => theme.colors.bgPrimary};

  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  ${interactive()}

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

    font-size: ${theme.fontSizes.md}px;
  `)}
`;

export const ArrowIconStyled = styled(ArrowDownIcon)`
  position: absolute;

  top: 50%;
  right: 20px;

  width: 12px;
  height: 12px;

  transform: translateY(-50%);

  & path {
    fill: ${({ theme }) => theme.colors.text};
  }

  ${media('tablet')`
    right: 15px;
  `}
`;
