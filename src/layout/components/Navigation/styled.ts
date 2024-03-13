import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { ICONS } from '@/constants';
import { flex, interactive } from '@/styles';

const { TwitterIcon } = ICONS;

export const NavigationWrapper = styled.section`
  padding: ${({ theme }) => `${theme.margins.lg}px ${theme.margins.xl}px`};

  border-right: 1px solid ${({ theme }) => theme.colors.bgSecondaryDark};
`;

export const TwitterIconStyled = styled(TwitterIcon)`
  width: 40px;
  height: 40px;

  margin-bottom: ${({ theme }) => theme.margins.lg}px;
`;

export const NavigationListWrapper = styled.div`
  margin-bottom: 120px;
`;

export const NavigationList = styled.ul`
  ${flex('center', 'flex-start')}

  flex-direction: column;
  gap: ${({ theme }) => theme.margins.md}px;

  margin-bottom: ${({ theme }) => theme.margins.xl}px;
`;

export const NavigationLink = styled(NavLink)`
  ${flex('flex-start')}

  gap: ${({ theme }) => theme.margins.sm}px;

  font-weight: ${({ theme }) => theme.fontWeight.md};

  ${interactive()}

  & svg {
    width: 28px;
    height: 28px;

    & path {
      fill: ${({ theme }) => theme.colors.text};
    }
  }
`;
