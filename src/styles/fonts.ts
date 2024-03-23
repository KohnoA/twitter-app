import { createGlobalStyle } from 'styled-components';

import robotoBlack from '@/assets/fonts/Roboto/Roboto-Black.woff';
import robotoBold from '@/assets/fonts/Roboto/Roboto-Bold.woff';
import robotoMedium from '@/assets/fonts/Roboto/Roboto-Medium.woff';
import robotoRegular from '@/assets/fonts/Roboto/Roboto-Regular.woff';

export const FontsStyles = createGlobalStyle`
  @font-face {
    font-weight: 900;
    font-family: Roboto;
    src: url(${robotoBlack}) format('woff');
  }

  @font-face {
    font-weight: 700;
    font-family: Roboto;
    src: url(${robotoBold}) format('woff');
  }

  @font-face {
    font-weight: 500;
    font-family: Roboto;
    src: url(${robotoMedium}) format('woff');
  }

  @font-face {
    font-weight: 400;
    font-family: Roboto;
    src: url(${robotoRegular}) format('woff');
  }
`;
