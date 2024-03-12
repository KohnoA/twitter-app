import { LoginForm } from '@/components/LoginForm';
import { Title } from '@/components/UI';
import { useAppDispatch } from '@/hooks';
import { signInThunk } from '@/store/thunks';
import { FormWrapper, PageContainer, TwitterIconStyled } from '@/styles';
import { LoginFormFields } from '@/types';

export const LoginPage = () => {
  const dispatch = useAppDispatch();

  const loginFormSubmit = (data: LoginFormFields) => {
    dispatch(signInThunk(data));
  };

  return (
    <PageContainer>
      <FormWrapper>
        <TwitterIconStyled width={50} height={50} />
        <Title $size="xl3">Log in to Twitter</Title>

        <LoginForm onSubmit={loginFormSubmit} />
      </FormWrapper>
    </PageContainer>
  );
};
