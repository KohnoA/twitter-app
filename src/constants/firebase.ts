export const FIREBASE_API_KEY = process.env.VITE_FIREBASE_API_KEY;
export const FIREBASE_AUTH_DOMAIN = process.env.VITE_FIREBASE_AUTH_DOMAIN;
export const FIREBASE_PROJECT_ID = process.env.VITE_FIREBASE_PROJECT_ID;
export const FIREBASE_STORAGE_BUCKET = process.env.VITE_FIREBASE_STORAGE_BUCKET;
export const FIREBASE_MESSAGING_SENDER_ID = process.env.VITE_FIREBASE_MESSAGING_SENDER_ID;
export const FIREBASE_APP_ID = process.env.VITE_FIREBASE_APP_ID;
export const FIREBASE_MEASUREMENT_ID = process.env.VITE_FIREBASE_MEASUREMENT_ID;

export enum FirebaseErrorCodes {
  EMAIL_ALREADY_USE = 'auth/email-already-in-use',
  INVALID_CREDENTIAL = 'auth/invalid-credential',
}

export enum FirestoreDocKeys {
  USERS = 'users',
  TWEETS = 'tweets',
}
