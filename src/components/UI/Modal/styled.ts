import styled from 'styled-components';

import { Backdrop, flex, interactive, media } from '@/styles';

export const BackdropStyled = styled(Backdrop)`
  ${flex()}

  padding: 5px;
`;

export const ModalContent = styled.section`
  position: relative;

  margin: auto;
  padding: 50px 40px 40px;

  background-color: ${({ theme }) => theme.colors.bgPrimary};
  border-radius: ${({ theme }) => theme.radius.low}px;
  box-shadow: ${({ theme }) => theme.shadow};

  ${media('tablet')`
    padding: 40px 15px 25px 15px;
  `}
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
