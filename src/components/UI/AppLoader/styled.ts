import styled from 'styled-components';

import { ICONS } from '@/constants';
import { flex } from '@/styles';

import { Title } from '../Title';

const { TwitterIcon, SpinnerIcon } = ICONS;

export const AppLoaderStyled = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  ${flex()}

  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.bgPrimary};
`;

export const TwitterLogoWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.margins.md}px;
`;

export const TitleStyled = styled(Title)`
  margin-bottom: ${({ theme }) => theme.margins.md}px;
`;

export const TwitterIconStyled = styled(TwitterIcon)`
  width: ${({ theme }) => theme.iconSize.xl}px;
  height: ${({ theme }) => theme.iconSize.xl}px;
`;

export const SpinnerIconStyled = styled(SpinnerIcon)`
  width: ${({ theme }) => theme.iconSize.xl2}px;
  height: ${({ theme }) => theme.iconSize.xl2}px;

  & circle {
    stroke: ${({ theme }) => theme.colors.text};
  }
`;
