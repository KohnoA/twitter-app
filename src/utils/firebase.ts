import { FirebaseError } from 'firebase/app';

import { Errors, FirebaseErrorCodes } from '@/constants';

export function firebaseErrorHandler(error: FirebaseError) {
  switch (error.code) {
    case FirebaseErrorCodes.INVALID_CREDENTIAL:
      return { error: { message: Errors.INVALID_USER_CREDENTIAL } };
    case FirebaseErrorCodes.INVALID_PASSWORD:
      return { error: { message: Errors.INVALID_PASSWORD } };
    case FirebaseErrorCodes.EMAIL_ALREADY_USE:
      return { error: { message: Errors.USER_EXIST } };
    default:
      return { error: { message: Errors.GENERAL_ERROR } };
  }
}
