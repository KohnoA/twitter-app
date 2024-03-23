import { LoginForm } from '@/components/LoginForm';
import { Title } from '@/components/UI';
import { FormWrapper, PageContainer, TwitterIconStyled } from '@/styles';

export const LoginPage = () => (
  <PageContainer>
    <FormWrapper>
      <TwitterIconStyled width={50} height={50} />
      <Title $size="xl3">Log in to Twitter</Title>

      <LoginForm />
    </FormWrapper>
  </PageContainer>
);
