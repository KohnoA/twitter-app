import { RegisterOptions } from 'react-hook-form';

import { Errors, REGEX_EMAIL, REGEX_NAME, REGEX_PHONE } from '@/constants';
import { setPhoneMask } from '@/utils';

export const birthdayDescription =
  'Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.';

export const nameValidation: RegisterOptions = {
  required: Errors.REQUIRED,
  pattern: {
    value: REGEX_NAME,
    message: Errors.NAME,
  },
};

export const emailValidation: RegisterOptions = {
  required: Errors.REQUIRED,
  pattern: {
    value: REGEX_EMAIL,
    message: Errors.EMAIL,
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
