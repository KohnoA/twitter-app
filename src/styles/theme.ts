import { AppColors, AppThemes } from '@/constants';

const lightTheme = {
  main: AppColors.BLUE_LIGHT,
  text: AppColors.BLACK,
  textAlt: AppColors.WHITE,
  bgPrimary: AppColors.WHITE,
  bgSecondaryLight: AppColors.GREY_LIGHT,
  bgSecondaryDark: AppColors.GREY_DARK,
};

const darkTheme = {
  main: AppColors.BLUE_LIGHT,
  text: AppColors.BLACK,
  textAlt: AppColors.WHITE,
  bgPrimary: AppColors.WHITE,
  bgSecondaryLight: AppColors.GREY_LIGHT,
  bgSecondaryDark: AppColors.GREY_DARK,
};

export const generalTheme = {
  fontFamily: `'Roboto', 'Arial', sans-serif`,

  fontWeight: {
    rg: 400,
    md: 600,
    bd: 700,
    bk: 900,
  },

  fontSizes: {
    sm: 13,
    md: 14,
    lg: 16,
    xl: 18,
    xl2: 20,
    xl3: 30,
    xl4: 40,
    xl5: 60,
    xl6: 80,
  },

  breakpoints: {
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    tablet: 768,
    desktopS: 1024,
    desktopM: 1280,
    desktopL: 1440,
  },

  margins: {
    sm: 10,
    md: 20,
    lg: 30,
    xl: 40,
  },

  radius: {
    high: 42,
  },

  opacity: {
    low: '0.7',
    high: '0.6',
  },

  duration: 300,
};

export const getTheme = (theme: AppThemes) => ({
  colors: theme === AppThemes.DARK ? darkTheme : lightTheme,
  ...generalTheme,
});

export const theme = getTheme(AppThemes.LIGHT);
