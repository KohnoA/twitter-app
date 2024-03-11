import styled from 'styled-components';

import { MyLink, Paragraph, Title } from '@/components/UI';
import { ICONS } from '@/constants';
import { media } from '@/styles';

const { TwitterIcon } = ICONS;

export const SignUpForm = styled.form`
  max-width: 670px;
  padding: ${({ theme }) => `${theme.margins.xl}px 0`};
`;

export const TwitterIconStyle = styled(TwitterIcon)`
  display: block;

  margin: 0 auto;
  margin-bottom: ${({ theme }) => theme.margins.xl}px;
`;

export const EmailLink = styled(MyLink)`
  display: block;

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
