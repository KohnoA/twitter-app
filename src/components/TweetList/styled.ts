import styled from 'styled-components';

export const TweetListTitle = styled.h3`
  max-width: 240px;

  padding: ${({ theme }) => theme.margins.md}px;

  text-align: center;

  border-bottom: 2px solid ${({ theme }) => theme.colors.bgSecondary};
`;
