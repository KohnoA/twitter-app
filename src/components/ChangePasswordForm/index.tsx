import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Errors } from '@/constants';
import { useLazyUpdatePasswordQuery } from '@/store/api';

import { Button, ButtonWithSpinner, Input, Title } from '../UI';

import { confirmPasswordValidation, passwordValidation } from './config';
import * as S from './styled';
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
    <form onSubmit={handleSubmit(onSubmit)} data-testid="change-password-form">
      <Title $size="xl2">Change Password</Title>

      <Input
        data-testid="change-password-input"
        type="password"
        placeholder="Password"
        error={errors.password?.message}
        register={register('password', passwordValidation)}
      />
      <Input
        data-testid="change-password-confirm-input"
        type="password"
        placeholder="Confirm Password"
        error={errors.confirm?.message}
        register={register('confirm', confirmPasswordValidation)}
      />

      {error && <S.ErrorMessageStyled>{error.message}</S.ErrorMessageStyled>}

      <S.ButtonsWrapper>
        <Button type="button" onClick={onCancel} data-testid="change-password-cancel-button">
          Cancel
        </Button>
        <ButtonWithSpinner type="submit" isLoading={isLoading} data-testid="change-password-submit">
          Change
        </ButtonWithSpinner>
      </S.ButtonsWrapper>
    </form>
  );
};
