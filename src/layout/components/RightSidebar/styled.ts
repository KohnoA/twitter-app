import styled from 'styled-components';

export const RightSidebarWrapper = styled.aside`
  padding: ${({ theme }) => `${theme.margins.lg}px ${theme.margins.xl}px`};

  border-left: 1px solid ${({ theme }) => theme.colors.bgSecondaryDark};
`;

export const RightSidebarFooter = styled.div`
  & ul {
    justify-content: space-evenly;
    gap: ${({ theme }) => theme.margins.sm}px;

    a {
      opacity: ${({ theme }) => theme.opacity.high};

      &:hover {
        opacity: 1;
      }
    }
  }
`;
