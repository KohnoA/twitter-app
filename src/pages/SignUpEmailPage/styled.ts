import styled from 'styled-components';

import { ICONS } from '@/constants';
import { flex } from '@/styles';

const { TwitterIcon } = ICONS;

export const PageContainer = styled.div`
  ${flex()}

  min-height: 100vh;
  padding: ${({ theme }) => theme.margins.lg}px;
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 670px;
`;

export const TwitterIconStyle = styled(TwitterIcon)`
  display: block;

  margin: 0 auto;
  margin-bottom: ${({ theme }) => theme.margins.xl}px;
`;
