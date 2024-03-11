import { LoginForm } from '@/components/LoginForm';
import { Title } from '@/components/UI';
import { FormWrapper, PageContainer, TwitterIconStyled } from '@/styles';
import { LoginFormFields } from '@/types';

export const LoginPage = () => {
  const loginFormSubmit = (data: LoginFormFields) => {
    // eslint-disable-next-line no-console
    console.log(data);
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
