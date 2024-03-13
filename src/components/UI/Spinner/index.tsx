import { ICONS } from '@/constants';

import { SpinnerWrapper } from './styled';

const { SpinnerIcon } = ICONS;
const DEFAULT_SHOW_VALUE = true;
const DEFAULT_WIDTH = 30;
const DEFAULT_HEIGHT = 30;

interface SpinnerProps {
  width?: number;
  height?: number;
  show?: boolean;
}

export const Spinner = ({ width, height, show = DEFAULT_SHOW_VALUE }: SpinnerProps) => {
  if (!show) {
    return null;
  }

  return (
    <SpinnerWrapper>
      <SpinnerIcon width={width ?? DEFAULT_WIDTH} height={height ?? DEFAULT_HEIGHT} />
    </SpinnerWrapper>
  );
};
