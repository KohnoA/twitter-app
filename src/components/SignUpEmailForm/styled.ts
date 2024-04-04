import styled from 'styled-components';

import { MyLink, Paragraph, Title } from '@/components/UI';
import { media } from '@/styles';

export const SignUpEmailFormStyled = styled.form`
  width: 100%;
  margin-bottom: ${({ theme }) => `${theme.margins.xl}px`};
`;

export const EmailLink = styled(MyLink)`
  display: inline-block;

  margin-bottom: ${({ theme }) => theme.margins.md}px;
`;

export const DateOfBirthTitle = styled(Title)`
  margin-bottom: ${({ theme }) => theme.margins.lg}px;

  ${({ theme }) =>
    media('tablet')(`
      margin-bottom: ${theme.margins.sm}px;
  `)}
`;

export const BirthdayDescriptionParagraph = styled(Paragraph)`
  margin-bottom: ${({ theme }) => theme.margins.lg}px;

  opacity: ${({ theme }) => theme.opacity.low};

  ${({ theme }) =>
    media(`tablet`)(`
    font-size: ${theme.fontSizes.md}px;
  `)}
`;

export const SelectsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr 0.5fr;
  gap: ${({ theme }) => theme.margins.md}px;

  margin-bottom: ${({ theme }) => theme.margins.xl}px;

  ${({ theme }) =>
    media(`tablet`)(`
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    gap: ${theme.margins.sm}px;
  `)}
`;
