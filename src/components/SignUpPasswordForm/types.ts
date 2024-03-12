import { SubmitHandler } from 'react-hook-form';

import { OnSubmitPasswordFormFields } from '@/types';

export interface SignUpPasswordFormProps {
  error?: string | null;
  onStepBack: () => void;
  onSubmit: SubmitHandler<OnSubmitPasswordFormFields>;
}
