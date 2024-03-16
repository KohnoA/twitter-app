import { memo, useId } from 'react';

import { Slider, SliderLever, SwitchWrapper } from './styled';
import { SwitchProps } from './type';

export const Switch = memo(({ className, isToggled, onChange }: SwitchProps) => {
  const id = useId();

  return (
    <SwitchWrapper htmlFor={id} className={className}>
      <input id={id} type="checkbox" checked={isToggled} onChange={onChange} />

      <Slider>
        <SliderLever />
      </Slider>
    </SwitchWrapper>
  );
});
