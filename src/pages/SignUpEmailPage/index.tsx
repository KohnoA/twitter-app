import { useCallback, useEffect, useMemo, useState } from 'react';

import { SignUpEmailForm, SignUpPasswordForm } from '@/components';
import { Title } from '@/components/UI';
import { SignUpSteps } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { userSelector } from '@/store/selectors';
import { clearUserError } from '@/store/slices';
import { signUpThunk } from '@/store/thunks';
import { FormWrapper, PageContainer, TwitterIconStyled } from '@/styles';
import { EmailFormFields, OnSubmitPasswordFormFields } from '@/types';
import { getBirthdayDate } from '@/utils';

export const SignUpEmailPage = () => {
  const [step, setStep] = useState<SignUpSteps>(SignUpSteps.EMAIL_STEP);
  const [emailFormData, setEmailFormData] = useState<EmailFormFields>();
  const { error } = useAppSelector(userSelector);
  const dispatch = useAppDispatch();

  const emailFormSubmit = (data: EmailFormFields) => {
    setStep(SignUpSteps.PASSWORD_STEP);
    setEmailFormData(data);
  };

  const passwordFormSubmit = useCallback(
    ({ password }: OnSubmitPasswordFormFields) => {
      if (!emailFormData) return;

      const { day, month, year, ...otherData } = emailFormData;
      const user = {
        password,
        birthday: getBirthdayDate(year, month, day),
        ...otherData,
      };

      dispatch(signUpThunk(user));
    },
    [emailFormData, dispatch],
  );

  const onStepBack = () => setStep(SignUpSteps.EMAIL_STEP);

  const signUpForms = useMemo(
    () => [
      <SignUpEmailForm onSubmit={emailFormSubmit} defaultValues={emailFormData} />,
      <SignUpPasswordForm error={error} onSubmit={passwordFormSubmit} onStepBack={onStepBack} />,
    ],
    [error, emailFormData, passwordFormSubmit],
  );

  useEffect(
    () => () => {
      if (error) dispatch(clearUserError());
    },
    [error, dispatch],
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
