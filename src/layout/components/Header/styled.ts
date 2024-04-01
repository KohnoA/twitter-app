import styled from 'styled-components';

import { Title } from '@/components/UI';
import { flex, interactive, media } from '@/styles';

export const HeaderWrapper = styled.header`
  position: relative;

  ${flex('space-between', 'center')}

  gap: ${({ theme }) => theme.margins.md}px;

  padding: ${({ theme }) => `${theme.margins.md}px ${theme.margins.lg}px`};

  border-bottom: 2px solid ${({ theme }) => theme.colors.bgSecondary};

  ${({ theme }) =>
    media('tablet')(`
    flex-direction: column;
    align-items: stretch;
    row-gap: ${theme.margins.xl}px;

    &::before {
      content: '';
      position: absolute;

      top: 50%;
      left: 15px;
      right: 15px;
      transform: translateY(-50%);

      height: 2px;
      background-color: ${theme.colors.bgSecondary};
    }
  `)}

  ${({ theme }) =>
    media('mobileL')(`
    padding: ${theme.margins.md}px ${theme.margins.sm}px;
  `)}
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
  flex-grow: 1;
  margin: 0 ${({ theme }) => theme.margins.sm}px;

  ${media('tablet')(`
    text-align: right;
  `)}
`;

export const SearchContainer = styled.div`
  display: none;

  ${media('desktopM')`
    display: block;

    max-width: 300px;
  `}
`;

export const BackButton = styled.button`
  ${flex()}
  ${interactive()}

  padding: 0 10px;

  background-color: transparent;
  border: none;

  & svg path {
    fill: ${({ theme }) => theme.colors.stroke};
  }
`;

export const SideContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const RightContainer = styled(SideContainer)`
  ${media('tablet')`
    order: -1;
    justify-content: space-between;
  `}
`;
