import styled from 'styled-components';

import { flex } from '@/styles';

import { Paragraph, Spinner } from '../UI';

export const TweetListStyled = styled.ul`
  position: relative;
`;

export const TweetListTitle = styled.h3`
  max-width: 240px;

  padding: ${({ theme }) => theme.margins.md}px;

  text-align: center;

  border-bottom: 2px solid ${({ theme }) => theme.colors.bgSecondary};
`;

export const EmptyMessage = styled(Paragraph)`
  ${flex()}

  padding: ${({ theme }) => `${theme.margins.xl}px 0`};
`;

export const SpinnerStyled = styled(Spinner)`
  position: static;
  transform: initial;

  margin: 15% auto;

  & svg {
    width: ${({ theme }) => theme.iconSize.xl}px;
    height: ${({ theme }) => theme.iconSize.xl}px;
  }
`;
