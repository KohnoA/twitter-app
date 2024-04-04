import { RegisterOptions } from 'react-hook-form';

import { Errors, MAX_IMAGE_SIZE_BYTES, MONTH, REGEX_NAME, REGEX_PHONE } from '@/constants';
import { UserDataType } from '@/types';
import { setPhoneMask } from '@/utils';

export const nameValidation: RegisterOptions = {
  required: Errors.REQUIRED,
  pattern: {
    value: REGEX_NAME,
    message: Errors.NAME,
  },
};

export const phoneValidation: RegisterOptions = {
  required: Errors.REQUIRED,
  pattern: {
    value: REGEX_PHONE,
    message: Errors.PHONE,
  },
  onChange(event) {
    const { value } = event.target;
    event.target.value = setPhoneMask(value);
  },
};

export const selectValidation: RegisterOptions = {
  required: Errors.REQUIRED,
};

export const avatarValidation: RegisterOptions = {
  validate(files) {
    if (!files.length) return true;

    const { size } = files[0];
    return size <= MAX_IMAGE_SIZE_BYTES || Errors.INVALID_IMAGE_SIZE;
  },
};

export function getDefaultFormFields(userData: UserDataType | null) {
  return {
    name: userData?.name,
    phone: userData?.phone,
    description: userData?.description,
    day: userData ? String(new Date(userData.birthday).getDate()) : '',
    month: userData ? MONTH[new Date(userData.birthday).getMonth()] : '',
    year: userData ? String(new Date(userData.birthday).getFullYear()) : '',
  };
}
