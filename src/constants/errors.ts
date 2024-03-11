export enum Errors {
  REQUIRED = 'This field is required',
  NAME = 'The name must begin with a capital letter and contain from 3 to 30 characters',
  PHONE = 'Invalid phone number, required "+375 (29) 111 22 33"',
  EMAIL = 'Invalid email value',
  PASSWORD = 'The password must contain a minimum of 8 characters, one capital letter and one number',
  PASSWORD_CONFIRM = 'Passwords must match',
}
