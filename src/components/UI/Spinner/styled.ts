import styled from 'styled-components';

import { flex } from '@/styles';

export const SpinnerWrapper = styled.span`
  position: absolute;

  top: 50%;
  left: 50%;

  transform: translateX(-50%) translateY(-50%);

  width: 100%;
  height: 100%;

  ${flex()}
`;
