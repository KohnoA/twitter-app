import styled, { createGlobalStyle } from 'styled-components';

import defaultAvatar from '@/assets/images/default-avatar.png';
import { ICONS } from '@/constants';

import { bgImage, flex } from './mixins';

const { TwitterIcon } = ICONS;

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    color-scheme: dark;

    width: 100%;
    min-height: 100%;
    overflow-x: hidden;

    display: flex;
  }

  body {
    width: 100%;
    min-width: ${({ theme }) => theme.breakpoints.mobileS}px;

    margin: 0;
    padding: 0;
  
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => theme.fontSizes.xl}px;
    color: ${({ theme }) => theme.colors.text};

    background-color: ${({ theme }) => theme.colors.bgPrimary};
    transition: background ${({ theme }) => theme.duration}ms, color ${({ theme }) => theme.duration}ms;
  }

  #root {
    height: 100%;
  }

  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;

    list-style: none;
  }
`;

export const PageContainer = styled.div`
  ${flex()}

  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.margins.lg}px;
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 470px;
`;

export const TwitterIconStyled = styled(TwitterIcon)`
  display: block;

  margin: 0 auto;
  margin-bottom: ${({ theme }) => theme.margins.xl}px;
`;

export const Backdrop = styled.div<{ $show?: boolean }>`
  position: fixed;
  z-index: 1;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: ${({ theme }) => theme.colors.blackTransparent};
  transition: all ${({ theme }) => theme.duration}ms;
  overflow-y: auto;

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

export const NotImplementTitle = styled.h4`
  padding-top: ${({ theme }) => theme.margins.lg}px;

  text-align: center;
`;

export const UserAvatar = styled.div<{ $avatarUrl?: string | null }>`
  width: 50px;
  height: 50px;

  ${({ $avatarUrl }) => bgImage($avatarUrl ?? defaultAvatar)}

  border-radius: 50%;
`;
