import styled from 'styled-components';

import { Title } from '@/components/UI';
import { flex } from '@/styles';

export const HeaderWrapper = styled.header`
  ${flex('space-between', 'center')}

  padding: ${({ theme }) => theme.margins.lg}px;
`;

export const PageTitle = styled(Title)`
  margin: 0;
`;
