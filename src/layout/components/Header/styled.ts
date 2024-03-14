import styled from 'styled-components';

import { Title } from '@/components/UI';
import { flex, interactive, media } from '@/styles';

export const HeaderWrapper = styled.header`
  ${flex('space-between', 'center')}

  padding: ${({ theme }) => theme.margins.lg}px;
`;

export const LeftWrapper = styled.div`
  ${flex('flex-start')}

  gap: ${({ theme }) => theme.margins.lg}px;
`;

export const BurgerButton = styled.button`
  display: none;

  ${interactive()}

  background-color: transparent;
  border: none;

  ${media('desktopS')(`
    ${flex()}
  `)}
`;

export const PageTitle = styled(Title)`
  margin: 0;
`;
