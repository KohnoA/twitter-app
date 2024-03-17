import { DEFAULT_HEIGHT, DEFAULT_SHOW_VALUE, DEFAULT_WIDTH, SpinnerIcon } from './constants';
import { SpinnerWrapper } from './styled';
import { SpinnerProps } from './types';

export const Spinner = (props: SpinnerProps) => {
  const { className, width, height, show = DEFAULT_SHOW_VALUE } = props;

  if (!show) {
    return null;
  }

  return (
    <SpinnerWrapper className={className}>
      <SpinnerIcon width={width ?? DEFAULT_WIDTH} height={height ?? DEFAULT_HEIGHT} />
    </SpinnerWrapper>
  );
};
