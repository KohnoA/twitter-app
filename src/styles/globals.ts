import styled, { createGlobalStyle } from 'styled-components';

import { ICONS } from '@/constants';

import { flex } from './mixins';

const { TwitterIcon } = ICONS;

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    min-width: ${({ theme }) => theme.breakpoints.mobileS}px;

    margin: 0;
    padding: 0;
  
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => theme.fontSizes.xl}px;
    color: ${({ theme }) => theme.colors.text};

    background-color: ${({ theme }) => theme.colors.bgPrimary};
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

  min-height: 100vh;
  padding: ${({ theme }) => theme.margins.lg}px;
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 670px;
`;

export const TwitterIconStyled = styled(TwitterIcon)`
  display: block;

  margin: 0 auto;
  margin-bottom: ${({ theme }) => theme.margins.xl}px;
`;
