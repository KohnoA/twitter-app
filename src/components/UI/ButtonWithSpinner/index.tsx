import { Button } from '../Button';

import { ChildrenWapper, SpinnerStyled } from './styled';
import { ButtonWithSpinnerProps } from './types';

export const ButtonWithSpinner = (props: ButtonWithSpinnerProps) => {
  const { children, isLoading, disabled, $view, ...otherProps } = props;

  return (
    <Button $view={$view} disabled={isLoading || disabled} {...otherProps}>
      <SpinnerStyled $view={$view} show={isLoading} />

      <ChildrenWapper $hidden={isLoading}>{children}</ChildrenWapper>
    </Button>
  );
};
