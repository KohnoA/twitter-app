import { useCallback, useMemo, useState } from 'react';

import { SignUpEmailForm, SignUpPasswordForm } from '@/components';
import { Title } from '@/components/UI';
import { SignUpSteps } from '@/constants';
import { FormWrapper, PageContainer, TwitterIconStyled } from '@/styles';
import { EmailFormFields, OnSubmitPasswordFormFields } from '@/types';
import { getBirthdayDate } from '@/utils';

export const SignUpEmailPage = () => {
  const [step, setStep] = useState<SignUpSteps>(SignUpSteps.EMAIL_STEP);
  const [emailFormData, setEmailFormData] = useState<EmailFormFields>();

  const emailFormSubmit = (data: EmailFormFields) => {
    setStep(SignUpSteps.PASSWORD_STEP);
    setEmailFormData(data);
  };

  const passwordFormSubmit = useCallback(
    (data: OnSubmitPasswordFormFields) => {
      if (!emailFormData) return;

      const { day, month, year, ...otherData } = emailFormData;
      const user = {
        birthday: getBirthdayDate(year, month, day),
        ...otherData,
        ...data,
      };

      // eslint-disable-next-line no-console
      console.log(user);
    },
    [emailFormData],
  );

  const onStepBack = () => setStep(SignUpSteps.EMAIL_STEP);

  const signUpForms = useMemo(
    () => [
      <SignUpEmailForm onSubmit={emailFormSubmit} defaultValues={emailFormData} />,
      <SignUpPasswordForm onSubmit={passwordFormSubmit} onStepBack={onStepBack} />,
    ],
    [emailFormData, passwordFormSubmit],
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
