import styled from 'styled-components';

import { Backdrop, flex, interactive } from '@/styles';

export const BackdropStyled = styled(Backdrop)`
  ${flex()}
`;

export const ModalContent = styled.section`
  position: relative;

  margin: auto;
  padding: ${({ theme }) => theme.margins.xl}px;

  background-color: ${({ theme }) => theme.colors.bgPrimary};
  border-radius: ${({ theme }) => theme.radius.low}px;
  box-shadow: 4px 4px 10px 4px rgba(0, 0, 0, 0.2);
`;

export const ModalCloseButtom = styled.button`
  position: absolute;

  top: 5px;
  right: 5px;

  ${flex()}
  ${interactive()}

  background-color: transparent;
  border: none;
  cursor: pointer;

  & svg {
    width: 40px;
    height: 40px;
  }
`;
