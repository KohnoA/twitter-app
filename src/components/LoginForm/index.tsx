import { useForm } from 'react-hook-form';

import { AppRoutes } from '@/constants';
import { useLazySignInQuery } from '@/store/api';
import { LoginFormFields } from '@/types';

import { Input } from '../UI';

import { emailValidation, passwordValidation } from './config';
import * as S from './styled';

export const LoginForm = () => {
  const [signIn, { isLoading, error }] = useLazySignInQuery();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormFields>();

  const onSubmit = (data: LoginFormFields) => signIn(data);

  return (
    <S.LoginFormStyled onSubmit={handleSubmit(onSubmit)} data-testid="login-form">
      <Input
        data-testid="login-email-input"
        placeholder="Email address"
        error={errors.email?.message}
        register={register('email', emailValidation)}
      />

      <Input
        data-testid="login-password-input"
        type="password"
        placeholder="Password"
        error={errors.password?.message}
        register={register('password', passwordValidation)}
      />

      {error && <S.GeneralErrorMessage>{error.message}</S.GeneralErrorMessage>}

      <S.LoginButton data-testid="login-submit-button" type="submit" isLoading={isLoading}>
        Login
      </S.LoginButton>

      <S.SignUpLink to={AppRoutes.SIGN_UP}>Sign up to Twitter</S.SignUpLink>
    </S.LoginFormStyled>
  );
};
