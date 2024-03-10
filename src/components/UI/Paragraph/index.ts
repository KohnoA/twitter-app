import styled from 'styled-components';

import { generalTheme, interactive } from '@/styles';

interface ParagraphProps {
  $size?: keyof typeof generalTheme.fontSizes;
}

export const Paragraph = styled.p<ParagraphProps>`
  margin-bottom: ${({ theme }) => theme.margins.md}px;

  font-size: ${({ theme, $size }) => ($size ? theme.fontSizes[$size] : theme.fontSizes.md)}px;

  a {
    color: ${({ theme }) => theme.colors.main};

    ${interactive()}
  }
`;
