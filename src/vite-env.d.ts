import 'styled-components';

import { AppColors } from './constants';

declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGElement>>;
  export default content;
}

declare module '*.jpg';
declare module '*.png';
declare module '*.woff';

/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  VITE_APP_TITLE: string;
  VITE_FIREBASE_API_KEY: string;
  VITE_FIREBASE_AUTH_DOMAIN: string;
  VITE_FIREBASE_PROJECT_ID: string;
  VITE_FIREBASE_STORAGE_BUCKET: string;
  VITE_FIREBASE_MESSAGING_SENDER_ID: string;
  VITE_FIREBASE_APP_ID: string;
  VITE_MEASUREMENT_ID: string;
}

interface ImportMeta {
  readonly env: Readonly<ImportMetaEnv>;
}

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
