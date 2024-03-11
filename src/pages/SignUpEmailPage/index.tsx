import { SignUpEmailForm, SignUpPasswordForm } from '@/components';
import { Title } from '@/components/UI';

import { FormWrapper, PageContainer, TwitterIconStyle } from './styled';

export const SignUpEmailPage = () => (
  <PageContainer>
    <FormWrapper>
      <TwitterIconStyle width={50} height={50} />
      <Title $size="xl3">Create an account</Title>

      <SignUpEmailForm />

      <SignUpPasswordForm />
    </FormWrapper>
  </PageContainer>
);
