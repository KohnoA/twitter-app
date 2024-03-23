import { AppColors, AppThemes } from '@/constants';

const lightTheme = {
  main: AppColors.BLUE_LIGHT,
  text: AppColors.BLACK,
  textAlt: AppColors.WHITE,
  textInput: AppColors.PURPLE,
  bgPrimary: AppColors.WHITE,
  bgSecondary: AppColors.GREY_LIGHT,
  stroke: AppColors.GREY_DARK,
  error: AppColors.RED,
  blackTransparent: AppColors.BLACK_TRANSPARENT,
};

const darkTheme = {
  main: AppColors.BLUE_LIGHT,
  text: AppColors.WHITE,
  textAlt: AppColors.WHITE,
  textInput: AppColors.PURPLE,
  bgPrimary: AppColors.VIOLET,
  bgSecondary: AppColors.VIOLET_LIGHT,
  stroke: AppColors.GREY_DARK,
  error: AppColors.RED,
  blackTransparent: AppColors.BLACK_TRANSPARENT,
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
    low: 6,
  },

  opacity: {
    low: '0.7',
    high: '0.6',
  },

  duration: 300,

  shadow: `4px 4px 10px 4px ${AppColors.BLACK_TRANSPARENT}`,
};

export const getTheme = (theme: AppThemes) => ({
  colors: theme === AppThemes.DARK ? darkTheme : lightTheme,
  ...generalTheme,
});
