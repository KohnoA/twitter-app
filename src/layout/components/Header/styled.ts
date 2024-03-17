import styled from 'styled-components';

import { SearchInput, Switch, Title } from '@/components/UI';
import { flex, interactive, media } from '@/styles';

export const HeaderWrapper = styled.header`
  position: relative;

  ${flex('space-between', 'center')}

  gap: ${({ theme }) => theme.margins.md}px;

  padding: ${({ theme }) => `${theme.margins.md}px ${theme.margins.lg}px`};

  border-bottom: 2px solid ${({ theme }) => theme.colors.bgSecondary};

  ${({ theme }) =>
    media('tablet')(`
    display: grid;
    grid-template-columns: 40% 60%;
    column-gap: 0;
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

  ${media('tablet')(`
    place-self: center start;
  `)}
`;

export const PageTitle = styled(Title)`
  margin: 0 ${({ theme }) => theme.margins.sm}px;

  ${media('tablet')(`
    order: 3;
    place-self: center start;
  `)}
`;

export const SearchInputStyled = styled(SearchInput)`
  display: none;

  ${media('desktopM')`
    display: block;

    max-width: 300px;
    margin-left: auto;
  `}

  ${media('tablet')(`
    order: 2;
    place-self: center end;
  `)}
`;

export const SwitchStyled = styled(Switch)`
  ${media('tablet')(`
    order: 4;
    place-self: center end;
  `)}
`;
