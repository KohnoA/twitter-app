export const FIREBASE_API_KEY = process.env.VITE_FIREBASE_API_KEY || 'mock';
export const FIREBASE_AUTH_DOMAIN = process.env.VITE_FIREBASE_AUTH_DOMAIN || 'mock';
export const FIREBASE_PROJECT_ID = process.env.VITE_FIREBASE_PROJECT_ID || 'mock';
export const FIREBASE_STORAGE_BUCKET = process.env.VITE_FIREBASE_STORAGE_BUCKET || 'mock';
export const FIREBASE_MESSAGING_SENDER_ID = process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || 'mock';
export const FIREBASE_APP_ID = process.env.VITE_FIREBASE_APP_ID || 'mock';
export const FIREBASE_MEASUREMENT_ID = process.env.VITE_FIREBASE_MEASUREMENT_ID || 'mock';

export enum FirebaseErrorCodes {
  EMAIL_ALREADY_USE = 'auth/email-already-in-use',
  INVALID_CREDENTIAL = 'auth/invalid-credential',
  INVALID_PASSWORD = 'auth/wrong-password',
  STORAGE_NOT_FOUND = 'storage/object-not-found',
  USER_NOT_FOUND = 'auth/user-not-found',
}

export enum FirestoreDocKeys {
  USERS = 'users',
  TWEETS = 'tweets',
}
