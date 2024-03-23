export interface PasswordFormFields {
  password: string;
  confirm: string;
}

export type OnSubmitPasswordFormFields = Omit<PasswordFormFields, 'confirm'>;
