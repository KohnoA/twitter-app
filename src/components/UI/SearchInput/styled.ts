import styled from 'styled-components';

import { ICONS } from '@/constants';
import { flex, interactive, media } from '@/styles';

const { SearchIcon, CrossIcon } = ICONS;

export const SearchInputContainer = styled.form`
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
