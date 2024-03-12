import { LoginForm } from '@/components/LoginForm';
import { Title } from '@/components/UI';
import { signIn } from '@/services';
import { FormWrapper, PageContainer, TwitterIconStyled } from '@/styles';
import { LoginFormFields } from '@/types';

export const LoginPage = () => {
  const loginFormSubmit = (data: LoginFormFields) => {
    const { email, password } = data;

    signIn(email, password);
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
