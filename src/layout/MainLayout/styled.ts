import styled from 'styled-components';

import { media } from '@/styles';

import { Footer, RightSidebar } from '../components';

export const MainLayoutWrapper = styled.section`
  display: grid;
  grid-template-columns: 20% 55% 25%;

  max-width: 1920px;
  min-height: 100vh;

  margin: 0 auto;

  ${media(`desktopM`)`
    grid-template-columns: 25% 75%;
  `}

  ${media(`desktopS`)`
    grid-template-columns: 100%;
  `}
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
`;

export const MainContent = styled.main`
  position: relative;

  flex-grow: 1;

  margin-bottom: 120px;
`;

export const RightSidebarStyled = styled(RightSidebar)`
  ${media('desktopM')`
    display: none;
  `}
`;

export const FooterStyled = styled(Footer)`
  display: none;

  ${media('desktopM')`
    display: block;
  `}
`;
