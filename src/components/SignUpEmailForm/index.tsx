import { useForm } from 'react-hook-form';

import { AppRoutes, MONTH } from '@/constants';
import { EmailFormFields } from '@/types';
import { getDaysOptions, getYearsOptions } from '@/utils';

import { Button, Input, Select } from '../UI';

import * as config from './config';
import {
  BirthdayDescriptionParagraph,
  DateOfBirthTitle,
  EmailLink,
  SelectsWrapper,
  SignUpEmailFormStyled,
} from './styled';
import { SignUpEmailFormProps } from './types';

export const SignUpEmailForm = ({ defaultValues, onSubmit }: SignUpEmailFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailFormFields>({ defaultValues });

  return (
    <SignUpEmailFormStyled onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Name"
        error={errors.name?.message}
        register={register('name', config.nameValidation)}
      />

      <Input
        placeholder="Phone"
        error={errors.phone?.message}
        register={register('phone', config.phoneValidation)}
      />

      <Input
        placeholder="Email"
        error={errors.email?.message}
        register={register('email', config.emailValidation)}
      />

      <EmailLink to={AppRoutes.SIGN_UP}>Use email</EmailLink>
      <DateOfBirthTitle $size="xl" as="h4">
        Date of birth
      </DateOfBirthTitle>

      <BirthdayDescriptionParagraph $size="lg">
        {config.birthdayDescription}
      </BirthdayDescriptionParagraph>

      <SelectsWrapper>
        <Select
          options={MONTH}
          placeholder="Month"
          error={errors.month?.message}
          register={register('month', config.selectValidation)}
        />

        <Select
          placeholder="Day"
          error={errors.day?.message}
          options={getDaysOptions(0, 2024)}
          register={register('day', config.selectValidation)}
        />

        <Select
          placeholder="Year"
          options={getYearsOptions()}
          error={errors.year?.message}
          register={register('year', config.selectValidation)}
        />
      </SelectsWrapper>

      <Button type="submit">Next</Button>
    </SignUpEmailFormStyled>
  );
};
