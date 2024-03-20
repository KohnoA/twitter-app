import styled from 'styled-components';

import { ICONS } from '@/constants';
import { flex, interactive, media } from '@/styles';

const { SearchIcon, CrossIcon } = ICONS;

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

  width: 20px;
  height: 20px;
`;

export const CrossIconStyled = styled(CrossIcon)`
  width: 24px;
  height: 24px;

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
  box-shadow: 4px 4px 10px 4px rgba(0, 0, 0, 0.2);

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const SearchLoader = styled.div`
  ${flex()}

  width: 100%;
  padding: 20px 0;

  & svg {
    circle {
      stroke: ${({ theme }) => theme.colors.stroke};
    }
  }
`;

export const EmptyMessage = styled.p`
  ${flex()}

  width: 100%;
  padding: 20px 0;

  color: ${({ theme }) => theme.colors.stroke};
`;
