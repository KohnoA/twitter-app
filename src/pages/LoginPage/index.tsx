import { useEffect } from 'react';

import { LoginForm } from '@/components/LoginForm';
import { Title } from '@/components/UI';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { userSelector } from '@/store/selectors';
import { clearErrorStatus } from '@/store/slices/userSlice';
import { signInThunk } from '@/store/thunks';
import { FormWrapper, PageContainer, TwitterIconStyled } from '@/styles';
import { LoginFormFields } from '@/types';

export const LoginPage = () => {
  const { error } = useAppSelector(userSelector);
  const dispatch = useAppDispatch();

  const loginFormSubmit = (data: LoginFormFields) => {
    dispatch(signInThunk(data));
  };

  useEffect(
    () => () => {
      dispatch(clearErrorStatus());
    },
    [dispatch],
  );

  return (
    <PageContainer>
      <FormWrapper>
        <TwitterIconStyled width={50} height={50} />
        <Title $size="xl3">Log in to Twitter</Title>

        <LoginForm error={error} onSubmit={loginFormSubmit} />
      </FormWrapper>
    </PageContainer>
  );
};
