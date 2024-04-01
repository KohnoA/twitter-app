import styled from 'styled-components';

import { flex, interactive } from '@/styles';

export const ImageButton = styled.button`
  ${flex()}
  ${interactive()}

  position: relative;

  padding: 5px;

  background-color: ${({ theme }) => theme.colors.bgPrimary};
  border: 1px solid ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.radius.low}px;
  cursor: pointer;

  ${({ theme }) => `
    & svg {
      width: ${theme.iconSize.md}px;
      height: ${theme.iconSize.md}px;

      & path {
        fill: ${theme.colors.main};
      }
    }
  `};
`;

export const FileInputStyled = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
`;
