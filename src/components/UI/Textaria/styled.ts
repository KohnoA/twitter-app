import styled from 'styled-components';

export const TextariaStyled = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.margins.sm}px;
  margin-bottom: ${({ theme }) => theme.margins.sm}px;

  font: inherit;
  color: ${({ theme }) => theme.colors.text};

  background-color: ${({ theme }) => theme.colors.bgPrimary};
  border: 2px solid ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.radius.low}px;
  resize: none;

  &::placeholder {
    font-size: ${({ theme }) => theme.fontSizes.xl2}px;
    font-weight: ${({ theme }) => theme.fontWeight.bd};
  }
`;

export const TextariaLabelStyled = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.margins.sm}px;
`;
