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

  & svg {
    width: 24px;
    height: 24px;

    & path {
      fill: ${({ theme }) => theme.colors.main};
    }
  }
`;

export const FileInputStyled = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
`;
