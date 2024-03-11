import { SubmitHandler } from 'react-hook-form';

import { EmailFormFields } from '@/types';

export interface SignUpEmailFormProps {
  defaultValues?: Partial<EmailFormFields>;
  onSubmit: SubmitHandler<EmailFormFields>;
}
