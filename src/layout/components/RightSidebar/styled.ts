import styled from 'styled-components';

import { media } from '@/styles';

export const RightSidebarWrapper = styled.aside`
  padding: ${({ theme }) => theme.margins.md}px;

  border-left: 2px solid ${({ theme }) => theme.colors.bgSecondary};
`;

export const RightSidebarSearchWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.margins.xl}px;
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
