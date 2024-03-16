import { AppColors } from '@/constants';

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: AppColors;
      text: AppColors;
      textAlt: AppColors;
      bgPrimary: AppColors;
      bgSecondaryLight: AppColors;
      bgSecondaryDark: AppColors;
      error: AppColors;
    };

    fontFamily: string;

    fontWeight: {
      rg: number;
      md: number;
      bd: number;
      bk: number;
    };

    fontSizes: {
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xl2: number;
      xl3: number;
      xl4: number;
      xl5: number;
      xl6: number;
    };

    breakpoints: {
      mobileS: number;
      mobileM: number;
      mobileL: number;
      tablet: number;
      desktopS: number;
      desktopM: number;
      desktopL: number;
    };

    margins: {
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };

    radius: {
      high: number;
      low: number;
    };

    opacity: {
      low: string;
      high: string;
    };

    duration: number;
  }
}