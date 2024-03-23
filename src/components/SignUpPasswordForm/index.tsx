import { SubmitHandler, useForm } from 'react-hook-form';

import { Errors } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { useLazySignUpQuery } from '@/store/api';
import { signUpSelector } from '@/store/selectors';
import { setEmailStep } from '@/store/slices';
import { PasswordFormFields } from '@/types';
import { getBirthdayDate } from '@/utils';

import { Button, ButtonWithSpinner, Input } from '../UI';

import { confirmPasswordValidation, passwordValidation } from './config';
import { ButtonsWrapper, GeneralErrorMessage, SignUpPasswordFormStyled } from './styled';

export const SignUpPasswordForm = () => {
  const [signUp, { isLoading, error }] = useLazySignUpQuery();
  const { emailFormData } = useAppSelector(signUpSelector);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<PasswordFormFields>();

  const onSubmit: SubmitHandler<PasswordFormFields> = (data) => {
    const { password, confirm } = data;

    if (password !== confirm) {
      setError('confirm', { message: Errors.PASSWORD_CONFIRM }, { shouldFocus: true });
      return;
    }

    if (!emailFormData) return;
    const { day, month, year, ...otherData } = emailFormData;
    const userData = { birthday: getBirthdayDate(year, month, day), ...otherData };

    signUp({ userData, password });
  };

  const onStepBack = () => dispatch(setEmailStep());

  return (
    <SignUpPasswordFormStyled data-testid="signup-password-form" onSubmit={handleSubmit(onSubmit)}>
      <Input
        data-testid="signup-password-input"
        type="password"
        placeholder="Password"
        error={errors.password?.message}
        register={register('password', passwordValidation)}
      />

      <Input
        data-testid="signup-confirm-password-input"
        type="password"
        placeholder="Confirm Password"
        error={errors.confirm?.message}
        register={register('confirm', confirmPasswordValidation)}
      />

      {error && (
        <GeneralErrorMessage data-testid="signup-general-error">
          {error.message}
        </GeneralErrorMessage>
      )}

      <ButtonsWrapper>
        <Button data-testid="signup-back-button" type="button" onClick={onStepBack}>
          Back
        </Button>
        <ButtonWithSpinner data-testid="signup-submit-button" type="submit" isLoading={isLoading}>
          Sign Up
        </ButtonWithSpinner>
      </ButtonsWrapper>
    </SignUpPasswordFormStyled>
  );
};
