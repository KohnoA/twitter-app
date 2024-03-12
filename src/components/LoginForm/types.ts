import { SubmitHandler } from 'react-hook-form';

import { LoginFormFields } from '@/types';

export interface LoginFormProps {
  error?: string | null;
  onSubmit: SubmitHandler<LoginFormFields>;
}
