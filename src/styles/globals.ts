import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
