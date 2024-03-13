import { useForm } from 'react-hook-form';

import { AppRoutes } from '@/constants';
import { useAppDispatch, useUserFormStatus } from '@/hooks';
import { signInThunk } from '@/store/thunks';
import { LoginFormFields } from '@/types';

import { Input } from '../UI';

import { emailValidation, passwordValidation } from './config';
import { GeneralErrorMessage, LoginButton, LoginFormStyled, SignUpLink } from './styled';

export const LoginForm = () => {
  const { error, loading } = useUserFormStatus();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormFields>();

  const onSubmit = (data: LoginFormFields) => {
    dispatch(signInThunk(data));
  };

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

      <LoginButton type="submit" isLoading={loading}>
        Login
      </LoginButton>

      <SignUpLink to={AppRoutes.SIGN_UP}>Sign up to Twitter</SignUpLink>
    </LoginFormStyled>
  );
};
