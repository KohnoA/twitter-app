import styled from 'styled-components';

import twitterBgImg from '@/assets/images/back-twitter.jpg';
import { Paragraph, Title } from '@/components/UI';
import { bgImage, flex, media } from '@/styles';

const SIGH_UP_FORM_MAX_WIDTH = 403;

export const SignUpMain = styled.section`
  flex-grow: 1;

  display: flex;

  ${media('tablet')`
    min-height: 100%;
    justify-content: center;
    align-items: center;
  `}
`;

export const TwitterBackground = styled.div`
  flex-grow: 1;
  min-height: 100%;

  ${bgImage(twitterBgImg)}

  ${media('tablet')`
    display: none;
  `}
`;

export const SignUpForm = styled.div`
  ${flex('center', 'flex-start')}

  flex-direction: column;

  padding: ${({ theme }) => `${theme.margins.sm}px ${theme.margins.xl}px`};

  ${({ theme }) =>
    media('mobileL')(`
      padding: ${theme.margins.sm}px ${theme.margins.md}px;
  `)}
`;

export const TwitterIconWrapper = styled.p`
  margin-bottom: ${({ theme }) => theme.margins.xl}px;

  ${({ theme }) => media('desktopL')(`margin-bottom: ${theme.margins.sm}px;`)}
`;

export const MainTitle = styled(Title)`
  font-size: ${({ theme }) => theme.fontSizes.xl6}px;

  ${({ theme }) => media('desktopL')(`font-size: ${theme.fontSizes.xl5}px;`)}
  ${({ theme }) => media('desktopM')(`font-size: ${theme.fontSizes.xl4}px;`)}
  ${({ theme }) => media('tablet')(`font-size: ${theme.fontSizes.xl3}px;`)}
`;

export const SubTitle = styled(Title)`
  font-size: ${({ theme }) => theme.fontSizes.xl4}px;

  ${({ theme }) => media('desktopL')(`font-size: ${theme.fontSizes.xl3}px;`)}
  ${({ theme }) => media('desktopM')(`font-size: ${theme.fontSizes.xl2}px;`)}
`;

export const PolicyParagraph = styled(Paragraph)`
  max-width: ${SIGH_UP_FORM_MAX_WIDTH}px;
`;

export const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: ${({ theme }) => theme.margins.md}px;

  width: 100%;
  max-width: ${SIGH_UP_FORM_MAX_WIDTH}px;

  margin-bottom: ${({ theme }) => theme.margins.xl}px;

  ${({ theme }) => media('desktopL')(`margin-bottom: ${theme.margins.md}px;`)}
  ${({ theme }) => media('desktopM')(`gap: ${theme.margins.sm}px;`)}
`;
