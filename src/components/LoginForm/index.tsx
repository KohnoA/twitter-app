import { useForm } from 'react-hook-form';

import { AppRoutes, Errors } from '@/constants';
import { LoginFormFields } from '@/types';

import { Input } from '../UI';

import { LoginButton, LoginFormStyled, SignUpLink } from './styled';
import { LoginFormProps } from './types';

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
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
        register={register('email', { required: Errors.REQUIRED })}
      />

      <Input
        type="password"
        placeholder="Password"
        error={errors.password?.message}
        register={register('password', { required: Errors.REQUIRED })}
      />

      <LoginButton type="submit">Login</LoginButton>

      <SignUpLink to={AppRoutes.SIGN_UP}>Sign up to Twitter</SignUpLink>
    </LoginFormStyled>
  );
};
