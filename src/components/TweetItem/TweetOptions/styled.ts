import styled from 'styled-components';

import { interactive, media } from '@/styles';

import { MoreWrapperProps, TweetOptionProps } from './types';

export const MoreButton = styled.button`
  padding: 5px 10px;

  background-color: transparent;
  border: none;

  ${interactive()}

  & svg {
    width: 20px;
    height: 20px;

    & path {
      fill: ${({ theme }) => theme.colors.text};
    }
  }
`;

export const TweetOptionsStyled = styled.ul`
  position: absolute;
  z-index: 2;
  top: 100%;
  right: 100%;

  padding: ${({ theme }) => theme.margins.sm}px;

  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.radius.low}px;

  opacity: 0;
  pointer-events: none;
  transition: opacity ${({ theme }) => theme.duration}ms;
`;

export const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  display: none;
`;

export const TweetOption = styled.li<TweetOptionProps>`
  position: relative;
  padding: ${({ theme }) => theme.margins.sm}px;

  ${interactive()}

  color: ${({ theme }) => theme.colors.stroke};
  font-weight: ${({ theme }) => theme.fontWeight.md};
  white-space: nowrap;

  ${({ $isLoading }) =>
    $isLoading &&
    `
    & ${Loader} {
      display: block;
    }

    & span {
      opacity: 0;
    }
  `}
`;

export const BgForClosing = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  opacity: 0;
  pointer-events: none;
`;

export const MoreWrapper = styled.div<MoreWrapperProps>`
  position: relative;

  ${media('tablet')`
    order: 2;
    place-self: center end;
  `}

  ${({ $isActive }) =>
    $isActive &&
    `
    & ${TweetOptionsStyled}, ${BgForClosing} {
      opacity: 1;
      pointer-events: all;
    }
  `}
`;
