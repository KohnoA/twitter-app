import styled from 'styled-components';

import { flex, interactive } from '@/styles';

export const Slider = styled.span`
  position: relative;
  display: inline-block;

  width: 50px;
  height: 25px;

  border: 2px solid ${({ theme }) => theme.colors.bgSecondaryDark};
  border-radius: 25px;
`;

export const SliderLever = styled.span`
  position: absolute;
  bottom: -2px;
  left: -2px;

  width: 25px;
  height: 25px;

  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.bgSecondaryDark};
  transition: transform ${({ theme }) => theme.duration}ms;
  background-color: ${({ theme }) => theme.bgPrimary};
`;

export const SwitchWrapper = styled.label`
  ${flex()}
  ${interactive()}

  padding: ${({ theme }) => theme.margins.sm}px;

  & input {
    position: absolute;
    right: 9999px;
    visibility: hidden;
    opacity: 0;
  }

  & input:checked + ${Slider} > ${SliderLever} {
    transform: translateX(25px);
  }
`;
