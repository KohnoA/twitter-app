import { Button } from '../Button';
import { Spinner } from '../Spinner';

import { ChildrenWapper } from './styled';
import { ButtonWithSpinnerProps } from './types';

export const ButtonWithSpinner = (props: ButtonWithSpinnerProps) => {
  const { children, isLoading, disabled, ...otherProps } = props;

  return (
    <Button disabled={isLoading || disabled} {...otherProps}>
      <Spinner show={isLoading} />

      <ChildrenWapper $hidden={isLoading}>{children}</ChildrenWapper>
    </Button>
  );
};
