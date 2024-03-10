import styled from 'styled-components';

import { flex } from '@/styles';

export const PageContainer = styled.div`
  ${flex()}

  min-height: 100vh;
  padding: 0px ${({ theme }) => theme.margins.lg}px;
`;
