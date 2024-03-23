import { RegisterOptions } from 'react-hook-form';

import { Errors, REGEX_EMAIL, REGEX_PASSWORD } from '@/constants';

export const emailValidation: RegisterOptions = {
  required: Errors.REQUIRED,
  pattern: {
    value: REGEX_EMAIL,
    message: Errors.EMAIL,
  },
};

export const passwordValidation: RegisterOptions = {
  required: Errors.REQUIRED,
  pattern: {
    value: REGEX_PASSWORD,
    message: Errors.PASSWORD,
  },
};
