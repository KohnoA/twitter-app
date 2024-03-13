import styled from 'styled-components';

import { ChildrenWapperProps } from './types';

export const ChildrenWapper = styled.span<ChildrenWapperProps>`
  opacity: ${({ $hidden }) => ($hidden ? '0' : 1)};
`;
