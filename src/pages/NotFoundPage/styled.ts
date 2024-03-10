import styled from 'styled-components';

import { Paragraph, Title } from '@/components/UI';
import { flex, media } from '@/styles';

export const NotFoundSection = styled.section`
  flex-grow: 1;
  align-self: center;

  ${flex()}
  flex-direction: column;

  max-width: fit-content;

  ${media('tablet')`min-height: 100vh;`}
`;

export const NotFoundTitle = styled(Title)`
  margin-bottom: ${({ theme }) => theme.margins.sm}px;

  color: ${({ theme }) => theme.colors.main};

  ${({ theme }) => media('tablet')(`font-size: ${theme.fontSizes.xl5}px;`)}
`;

export const NotFoundParagraph = styled(Paragraph)`
  ${({ theme }) => media('tablet')(`font-size: ${theme.fontSizes.xl2}px;`)}
`;
