import { useForm } from 'react-hook-form';

import { AppRoutes, MONTH } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { signUpSelector } from '@/store/selectors';
import { setEmailFormData, setPasswordStep } from '@/store/slices';
import { EmailFormFields } from '@/types';
import { getDaysOptions, getYearsOptions } from '@/utils';

import { Button, Input, Select } from '../UI';

import * as config from './config';
import * as S from './styled';

export const SignUpEmailForm = () => {
  const { emailFormData } = useAppSelector(signUpSelector);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<EmailFormFields>({ defaultValues: emailFormData });

  const onSubmit = (data: EmailFormFields) => {
    dispatch(setPasswordStep());
    dispatch(setEmailFormData(data));
  };

  return (
    <S.SignUpEmailFormStyled data-testid="signup-email-form" onSubmit={handleSubmit(onSubmit)}>
      <Input
        data-testid="signup-name-input"
        placeholder="Name"
        error={errors.name?.message}
        register={register('name', config.nameValidation)}
      />

      <Input
        data-testid="signup-phone-input"
        placeholder="Phone"
        error={errors.phone?.message}
        register={register('phone', config.phoneValidation)}
      />

      <Input
        data-testid="signup-email-input"
        placeholder="Email"
        error={errors.email?.message}
        register={register('email', config.emailValidation)}
      />

      <S.EmailLink to={AppRoutes.SIGN_UP}>Use email</S.EmailLink>
      <S.DateOfBirthTitle $size="xl" as="h4">
        Date of birth
      </S.DateOfBirthTitle>

      <S.BirthdayDescriptionParagraph $size="lg">
        {config.birthdayDescription}
      </S.BirthdayDescriptionParagraph>

      <S.SelectsWrapper>
        <Select
          data-testid="signup-month-select"
          options={MONTH}
          placeholder="Month"
          error={errors.month?.message}
          register={register('month', config.selectValidation)}
        />

        <Select
          data-testid="signup-day-select"
          placeholder="Day"
          error={errors.day?.message}
          options={getDaysOptions(...watch(['month', 'year']))}
          register={register('day', config.selectValidation)}
        />

        <Select
          data-testid="signup-year-select"
          placeholder="Year"
          options={getYearsOptions()}
          error={errors.year?.message}
          register={register('year', config.selectValidation)}
        />
      </S.SelectsWrapper>

      <Button type="submit" data-testid="signup-next-button">
        Next
      </Button>
    </S.SignUpEmailFormStyled>
  );
};
