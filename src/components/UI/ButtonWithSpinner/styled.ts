import styled from 'styled-components';

import { AppColors } from '@/constants';

import { Spinner } from '../Spinner';

import { ChildrenWapperProps, SpinnerStyledProps } from './types';

export const ChildrenWapper = styled.span<ChildrenWapperProps>`
  opacity: ${({ $hidden }) => ($hidden ? '0' : 1)};
`;

export const SpinnerStyled = styled(Spinner)<SpinnerStyledProps>`
  ${({ $view, theme }) =>
    $view === 'primary'
      ? `
    & svg circle {
      stroke: ${theme.colors.text};
    }
  `
      : `
    & svg circle {
      stroke: ${AppColors.WHITE};
    }
  `}
`;
