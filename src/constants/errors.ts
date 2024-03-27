export enum Errors {
  REQUIRED = 'This field is required',
  NAME = 'The name must begin with a capital letter and contain from 3 to 30 characters',
  PHONE = 'Invalid phone number, required format "+375 (29) 111-22-33"',
  EMAIL = 'Invalid email value',
  PASSWORD = 'The password must consist of numbers and upper and lower case Latin letters',
  PASSWORD_CONFIRM = 'Passwords must match',
  GENERAL_ERROR = 'Something went wrong, try again later',
  USER_EXIST = 'A user with this email address is already registered',
  INVALID_USER_CREDENTIAL = 'Invalid email address or password',
}
