import { SubmitHandler } from 'react-hook-form';

import { OnSubmitPasswordFormFields } from '@/types';

export interface SignUpPasswordFormProps {
  onStepBack: () => void;
  onSubmit: SubmitHandler<OnSubmitPasswordFormFields>;
}
