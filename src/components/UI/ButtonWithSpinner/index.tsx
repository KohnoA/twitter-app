import { Button } from '../Button';
import { Spinner } from '../Spinner';

import { ChildrenWapper } from './styled';
import { ButtonWithSpinnerProps } from './types';

export const ButtonWithSpinner = ({ children, isLoading, ...props }: ButtonWithSpinnerProps) => (
  <Button {...props} disabled={isLoading}>
    <Spinner show={isLoading} />

    <ChildrenWapper $hidden={isLoading}>{children}</ChildrenWapper>
  </Button>
);
