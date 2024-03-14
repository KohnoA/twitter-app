import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '@/components/UI';
import { ICONS } from '@/constants';
import { flex, interactive, media } from '@/styles';

import { BackdropProps, NavigationWrapperProps } from './types';

const { TwitterIcon } = ICONS;

export const Backdrop = styled.div<BackdropProps>`
  position: fixed;
  z-index: 1;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.2);
  transition: all ${({ theme }) => theme.duration}ms;

  ${({ $show }) =>
    $show
      ? `
    opacity: 1;
    pointer-events: all;
  `
      : `
    opacity: 0;
    pointer-events: none;
  `}
`;

export const CrossButton = styled.button`
  display: none;

  position: absolute;

  top: 15px;
  right: 15px;

  ${interactive()}

  background-color: transparent;
  border: none;
`;

export const NavigationWrapper = styled.section<NavigationWrapperProps>`
  padding: ${({ theme }) => theme.margins.md}px;

  border-right: 1px solid ${({ theme }) => theme.colors.bgSecondaryDark};

  ${({ theme }) =>
    media('desktopM')(`
    font-size: ${theme.fontSizes.md}px;
  `)}

  ${({ theme, $isActiveBurger }) =>
    media(`desktopS`)(`
    position: fixed;
    z-index: 2;

    top: 0;
    left: 0;
    bottom: 0;
    transform: translateX(-100%);

    width: 300px;

    background-color: ${theme.colors.bgPrimary};
    transition: transform ${theme.duration}ms;
    drop-shadow(4px 4px 4px 4px);
    overflow-y: auto;

    ${$isActiveBurger && `transform: translateX(0);`}

    & ${CrossButton} {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `)}
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
