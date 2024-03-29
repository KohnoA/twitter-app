import styled from 'styled-components';

import { Recommendations } from '@/components';
import { media } from '@/styles';

import { RecommendationsStyledProps } from './types';

export const RightSidebarWrapper = styled.aside`
  padding: ${({ theme }) => theme.margins.md}px;

  border-left: 2px solid ${({ theme }) => theme.colors.bgSecondary};
`;

export const RightSidebarSearchWrapper = styled.div`
  margin-bottom: 80px;
`;

export const RecommendationsStyled = styled(Recommendations)<RecommendationsStyledProps>`
  margin-bottom: 80px;

  transition: all ${({ theme }) => theme.duration}ms;

  ${({ $isHidden }) =>
    $isHidden &&
    `
    opacity: 0.7;
    filter: blur(3px);
  `}
`;

export const RightSidebarFooter = styled.div`
  & ul {
    justify-content: space-evenly;
    gap: 10px;

    padding: 0;

    a {
      opacity: ${({ theme }) => theme.opacity.high};

      &:hover {
        opacity: 1;
      }
    }
  }

  ${media('desktopM')`
    & ul {
      gap: 8px;
    }
  `}
`;
