import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '@/components/UI';
import { ICONS } from '@/constants';
import { flex, interactive, media } from '@/styles';

const { TwitterIcon } = ICONS;

export const NavigationWrapper = styled.section`
  padding: ${({ theme }) => theme.margins.md}px;

  border-right: 1px solid ${({ theme }) => theme.colors.bgSecondaryDark};

  ${({ theme }) =>
    media('desktopM')(`
    font-size: ${theme.fontSizes.sm}px;
  `)}

  ${media(`desktopS`)`
    display: none;
  `}
`;

export const TwitterIconStyled = styled(TwitterIcon)`
  width: 40px;
  height: 40px;

  margin-bottom: ${({ theme }) => theme.margins.lg}px;
  margin-left: ${({ theme }) => theme.margins.md}px;

  ${({ theme }) =>
    media('desktopM')(`
      margin-bottom: ${theme.margins.md}px;
  `)}
`;

export const NavigationListWrapper = styled.div`
  margin-bottom: 120px;

  ${media('desktopM')`
    margin-bottom: 80px;
  `}
`;

export const NavigationList = styled.ul`
  ${flex('center', 'flex-start')}

  flex-direction: column;
  gap: ${({ theme }) => theme.margins.md}px;

  margin-bottom: ${({ theme }) => theme.margins.xl}px;
  padding: ${({ theme }) => `${theme.margins.sm}px ${theme.margins.md}px`};

  ${({ theme }) =>
    media('desktopM')(`
    gap: ${theme.margins.sm}px;

    margin-bottom: ${theme.margins.md}px;
  `)}
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

export const LogoutButton = styled(Button)`
  margin-bottom: ${({ theme }) => theme.margins.xl}px;
`;
