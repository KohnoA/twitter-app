import { useForm } from 'react-hook-form';

import { AppRoutes } from '@/constants';
import { LoginFormFields } from '@/types';

import { Input } from '../UI';

import { emailValidation, passwordValidation } from './config';
import { GeneralErrorMessage, LoginButton, LoginFormStyled, SignUpLink } from './styled';
import { LoginFormProps } from './types';

export const LoginForm = ({ error, onSubmit }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormFields>();

  return (
    <LoginFormStyled onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Email address"
        error={errors.email?.message}
        register={register('email', emailValidation)}
      />

      <Input
        type="password"
        placeholder="Password"
        error={errors.password?.message}
        register={register('password', passwordValidation)}
      />

      {error && <GeneralErrorMessage>{error}</GeneralErrorMessage>}

      <LoginButton type="submit">Login</LoginButton>

      <SignUpLink to={AppRoutes.SIGN_UP}>Sign up to Twitter</SignUpLink>
    </LoginFormStyled>
  );
};
