import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Errors } from '@/constants';
import { useLazyUpdatePasswordQuery } from '@/store/api';

import { Button, ButtonWithSpinner, Input, Title } from '../UI';

import { confirmPasswordValidation, passwordValidation } from './config';
import { ButtonsWrapper, ErrorMessageStyled } from './styled';
import { ChangePasswordFormFields, ChangePasswordFormProps } from './types';

export const ChangePasswordForm = ({ onCancel }: ChangePasswordFormProps) => {
  const [updatePassword, { isLoading, isSuccess, error }] = useLazyUpdatePasswordQuery();
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<ChangePasswordFormFields>();

  useEffect(() => {
    if (isSuccess) onCancel();
  }, [isSuccess, onCancel]);

  const onSubmit = (data: ChangePasswordFormFields) => {
    const { password, confirm } = data;

    if (password !== confirm) {
      setError('confirm', { message: Errors.PASSWORD_CONFIRM }, { shouldFocus: true });
      return;
    }

    updatePassword(password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Title $size="xl2">Change Password</Title>

      <Input
        placeholder="Password"
        error={errors.password?.message}
        register={register('password', passwordValidation)}
      />
      <Input
        placeholder="Confirm Password"
        error={errors.confirm?.message}
        register={register('confirm', confirmPasswordValidation)}
      />

      {error && <ErrorMessageStyled>{error.message}</ErrorMessageStyled>}

      <ButtonsWrapper>
        <Button type="button" onClick={onCancel}>
          Cancel
        </Button>
        <ButtonWithSpinner type="submit" isLoading={isLoading}>
          Change
        </ButtonWithSpinner>
      </ButtonsWrapper>
    </form>
  );
};
