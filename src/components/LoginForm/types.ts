import { SubmitHandler } from 'react-hook-form';

import { LoginFormFields } from '@/types';

export interface LoginFormProps {
  onSubmit: SubmitHandler<LoginFormFields>;
}
