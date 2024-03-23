import {
  AppLoaderStyled,
  SpinnerIconStyled,
  TitleStyled,
  TwitterIconStyled,
  TwitterLogoWrapper,
} from './styled';

export const AppLoader = () => (
  <AppLoaderStyled>
    <TwitterLogoWrapper>
      <TwitterIconStyled />
      <TitleStyled $size="xl4">Twitter App</TitleStyled>
    </TwitterLogoWrapper>
    <SpinnerIconStyled />
  </AppLoaderStyled>
);
