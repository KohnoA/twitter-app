import { RegisterOptions } from 'react-hook-form';

import { Errors, MAX_IMAGE_SIZE_BYTES } from '@/constants';

export const messageValidation: RegisterOptions = {
  required: true,
  maxLength: { message: Errors.INVALID_TWEET_MESSAGE, value: 10000 },
};

export const imageValidation: RegisterOptions = {
  validate(files) {
    const { size } = files[0];
    return size <= MAX_IMAGE_SIZE_BYTES || Errors.INVALID_IMAGE_SIZE;
  },
};
