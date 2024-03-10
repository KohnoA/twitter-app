import styled from 'styled-components';

import { generalTheme, media } from '@/styles';

interface TitleProps {
  $size?: keyof typeof generalTheme.fontSizes;
}

export const Title = styled.h2<TitleProps>`
  margin-bottom: ${({ theme }) => theme.margins.xl}px;

  font-weight: ${({ theme }) => theme.fontWeight.bk}px;
  font-size: ${({ theme, $size }) => ($size ? theme.fontSizes[$size] : theme.fontSizes.xl4)}px;

  ${({ theme }) => media('desktopL')(`margin-bottom: ${theme.margins.md}px;`)}
`;
