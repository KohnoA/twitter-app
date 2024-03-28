import { useEffect, useMemo } from 'react';

import { SignUpEmailForm, SignUpPasswordForm } from '@/components';
import { Title } from '@/components/UI';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { signUpSelector } from '@/store/selectors';
import { clearEmailFormData } from '@/store/slices';
import { FormWrapper, PageContainer, TwitterIconStyled } from '@/styles';

export const SignUpEmailPage = () => {
  const { step } = useAppSelector(signUpSelector);
  const dispatch = useAppDispatch();

  const signUpForms = useMemo(() => [<SignUpEmailForm />, <SignUpPasswordForm />], []);

  useEffect(
    () => () => {
      dispatch(clearEmailFormData());
    },
    [],
  );

  return (
    <PageContainer>
      <FormWrapper>
        <TwitterIconStyled width={50} height={50} />
        <Title $size="xl3">Create an account</Title>

        {signUpForms[step]}
      </FormWrapper>
    </PageContainer>
  );
};
