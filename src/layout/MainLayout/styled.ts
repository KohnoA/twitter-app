import styled from 'styled-components';

import { media } from '@/styles';

export const MainLayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 20% 55% 25%;

  max-width: 1920px;
  min-height: 100vh;

  margin: 0 auto;

  ${media(`desktopS`)`
    grid-template-columns: 70% 30%;
  `}
`;
