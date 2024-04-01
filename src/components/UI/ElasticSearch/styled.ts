import styled from 'styled-components';

import { flex, interactive, media, styledScroll } from '@/styles';

import { CrossIcon, SearchIcon } from './constants';

export const ElasticSearchContainer = styled.div`
  position: relative;
`;

export const ElasticSearchForm = styled.form`
  position: relative;
  width: 100%;
`;

export const SearchIconStyled = styled(SearchIcon)`
  position: absolute;

  top: 50%;
  left: 15px;

  transform: translateY(-50%);

  width: ${({ theme }) => theme.iconSize.sm}px;
  height: ${({ theme }) => theme.iconSize.sm}px;

  & path {
    fill: ${({ theme }) => theme.colors.textInput};
  }
`;

export const CrossIconStyled = styled(CrossIcon)`
  width: ${({ theme }) => theme.iconSize.md}px;
  height: ${({ theme }) => theme.iconSize.md}px;

  & path {
    fill: ${({ theme }) => theme.colors.textInput};
  }
`;

export const CrossButton = styled.button`
  position: absolute;

  top: 50%;
  right: 14px;

  transform: translateY(-50%);
  border: none;
  background-color: ${({ theme }) => theme.colors.bgSecondary};

  ${flex()}
  ${interactive()}
`;

export const SearchInputStyled = styled.input`
  width: 100%;
  padding: 12px 45px;

  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  color: ${({ theme }) => theme.colors.text};

  border: none;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  outline: none;
  border-radius: ${({ theme }) => theme.radius.high}px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textInput};
  }

  ${({ theme }) =>
    media('desktopM')(`
      font-size: ${theme.fontSizes.lg}px;
  `)}
`;

export const ResultsContainer = styled.div`
  position: absolute;
  z-index: 1;

  top: 100%;
  left: 0;

  transform: translateY(10px);

  ${flex('stretch', 'flex-start')}

  flex-direction: column;
  width: 100%;
  max-height: 300px;

  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.radius.low}px;
  overflow-y: auto;
  box-shadow: ${({ theme }) => theme.shadow};

  ${styledScroll()}
`;

const SaerchStateBlock = styled.div`
  ${flex()}

  width: 100%;
`;

export const SearchLoader = styled(SaerchStateBlock)`
  padding: 25px 0;

  ${({ theme }) => `
    & svg {
      width: ${theme.iconSize.lg}px;
      height: ${theme.iconSize.lg}px;

      & circle {
        stroke: ${theme.colors.stroke};
      }
    }
  `}
`;

export const EmptyMessage = styled(SaerchStateBlock)`
  padding: ${({ theme }) => theme.margins.lg}px 0;

  color: ${({ theme }) => theme.colors.stroke};
`;
