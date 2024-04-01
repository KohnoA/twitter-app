import { RegisterOptions } from 'react-hook-form';

import { Errors, MAX_IMAGE_SIZE_BYTES } from '@/constants';

export const messageValidation: RegisterOptions = {
  required: true,
  maxLength: { message: Errors.INVALID_TWEET_MESSAGE, value: 500 },
};

export const imageValidation: RegisterOptions = {
  validate(files) {
    if (!files.length) return true;

    const { size } = files[0];
    return size <= MAX_IMAGE_SIZE_BYTES || Errors.INVALID_IMAGE_SIZE;
  },
};
