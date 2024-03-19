import styled from 'styled-components';

import { flex } from '@/styles';

import { Paragraph } from '../UI';

export const TweetListStyled = styled.ul`
  position: relative;
`;

export const SpinnerItem = styled.li`
  padding: 80px 0;
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
