import styled from 'styled-components';

import { flex, interactive } from '@/styles';

export const FooterLinkList = styled.ul`
  ${flex()}

  flex-wrap: wrap;
  gap: ${({ theme }) => theme.margins.md}px;

  padding: ${({ theme }) => `${theme.margins.md}px ${theme.margins.sm}px`};

  font-size: ${({ theme }) => theme.fontSizes.sm}px;
`;

export const FooterLinkItem = styled.a`
  ${interactive()}
`;
