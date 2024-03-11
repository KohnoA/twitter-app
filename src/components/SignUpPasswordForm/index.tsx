import { SubmitHandler, useForm } from 'react-hook-form';

import { Errors } from '@/constants';

import { Button, Input } from '../UI';

import { confirmPasswordValidation, passwordValidation } from './config';
import { ButtonsWrapper, SignUpPasswordFormStyled } from './styled';
import { PasswordFormFields } from './types';

export const SignUpPasswordForm = () => {
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
    }
  };

  return (
    <SignUpPasswordFormStyled onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="password"
        placeholder="Password"
        error={errors.password?.message}
        register={register('password', passwordValidation)}
      />

      <Input
        type="password"
        placeholder="Confirm Password"
        error={errors.confirm?.message}
        register={register('confirm', confirmPasswordValidation)}
      />

      <ButtonsWrapper>
        <Button type="button">Back</Button>
        <Button type="submit">Sign Up</Button>
      </ButtonsWrapper>
    </SignUpPasswordFormStyled>
  );
};
