import styled from 'styled-components';

import { ICONS } from '@/constants';
import { interactive, media } from '@/styles';

const { ArrowDownIcon } = ICONS;

export const SelectWrapper = styled.div`
  position: relative;
`;

export const SelectStyled = styled.select`
  width: 100%;
  padding: ${({ theme }) => theme.margins.md}px;

  font-size: ${({ theme }) => theme.fontSizes.xl}px;

  border: 1px solid ${({ theme }) => theme.colors.bgSecondaryDark};
  border-radius: ${({ theme }) => theme.radius.low}px;
  background-color: ${({ theme }) => theme.colors.bgPrimary};

  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  ${interactive()}

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.text};
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
