export interface EmailFormFields {
  name: string;
  phone: string;
  email: string;
  day: string;
  month: string;
  year: string;
}

export interface LoginFormFields {
  email: string;
  password: string;
}

export interface PasswordFormFields {
  password: string;
  confirm: string;
}

export type OnSubmitPasswordFormFields = Omit<PasswordFormFields, 'confirm'>;
