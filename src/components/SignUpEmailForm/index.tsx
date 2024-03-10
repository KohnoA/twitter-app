import { AppRoutes, MONTH } from '@/constants';
import { getDaysOptions, getYearsOptions } from '@/utils';

import { Button, Input, Select, Title } from '../UI';

import { birthdayDescription } from './config';
import {
  BirthdayDescriptionParagraph,
  DateOfBirthTitle,
  EmailLink,
  SelectsWrapper,
  SignUpForm,
  TwitterIconStyle,
} from './styled';

export const SignUpEmailForm = () => (
  <SignUpForm>
    <TwitterIconStyle width={50} height={50} />
    <Title $size="xl3">Create an account</Title>

    <Input placeholder="Name" type="text" />
    <Input placeholder="Phone number" type="text" />
    <Input placeholder="Email" type="text" />

    <EmailLink to={AppRoutes.SIGN_UP}>Use email</EmailLink>
    <DateOfBirthTitle $size="xl" as="h4">
      Date of birth
    </DateOfBirthTitle>

    <BirthdayDescriptionParagraph $size="lg">{birthdayDescription}</BirthdayDescriptionParagraph>

    <SelectsWrapper>
      <Select options={MONTH} placeholder="Month" />
      <Select options={getDaysOptions(0, 2024)} placeholder="Day" />
      <Select options={getYearsOptions()} placeholder="Year" />
    </SelectsWrapper>

    <Button type="submit">Next</Button>
  </SignUpForm>
);
