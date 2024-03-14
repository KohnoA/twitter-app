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

  padding: 5px;

  ${interactive()}

  background-color: transparent;
  border: none;

  ${media('desktopS')(`
    display: flex;
    justify-content: center;
    align-items: center;
  `)}
`;

export const PageTitle = styled(Title)`
  margin: 0;
`;
