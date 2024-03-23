import { RegisterOptions } from 'react-hook-form';

import { Errors, REGEX_PASSWORD } from '@/constants';

export const passwordValidation: RegisterOptions = {
  required: Errors.REQUIRED,
  pattern: {
    value: REGEX_PASSWORD,
    message: Errors.PASSWORD,
  },
};

export const confirmPasswordValidation: RegisterOptions = {
  required: Errors.REQUIRED,
};
