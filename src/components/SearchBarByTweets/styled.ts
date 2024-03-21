import styled from 'styled-components';

import { interactive } from '@/styles';

export const TweetWrapper = styled.div`
  min-width: 0;
  max-width: 100%;
  padding: 15px;

  ${interactive()}
`;

export const TweetAuthor = styled.p`
  margin-bottom: 5px;

  color: ${({ theme }) => theme.colors.stroke};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TweetAuthorName = styled.span`
  margin-right: 5px;

  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeight.bd};
`;

export const TweetMessage = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
