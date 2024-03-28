import styled from 'styled-components';

import { styledScroll } from '@/styles';

import { TextariaStyledProps } from './types';

export const TextariaWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.margins.sm}px;
`;

export const TextariaStyled = styled.textarea<TextariaStyledProps>`
  width: 100%;
  padding: ${({ theme }) => theme.margins.sm}px;

  font: inherit;
  color: ${({ theme }) => theme.colors.text};

  background-color: ${({ theme }) => theme.colors.bgPrimary};
  border-radius: ${({ theme }) => theme.radius.low}px;
  transition: background ${({ theme }) => theme.duration}ms;
  resize: none;

  border: 2px solid
    ${({ theme, $isError }) => ($isError ? theme.colors.error : theme.colors.bgSecondary)};

  ${styledScroll()}

  &::placeholder {
    font-size: ${({ theme }) => theme.fontSizes.xl2}px;
    font-weight: ${({ theme }) => theme.fontWeight.bd};
  }
`;

export const TextariaLabelStyled = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.margins.sm}px;
`;
