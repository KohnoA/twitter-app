import { RegisterOptions } from 'react-hook-form';

import { Errors, REGEX_NAME, REGEX_PHONE } from '@/constants';

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
};

export const selectValidation: RegisterOptions = {
  required: Errors.REQUIRED,
};
