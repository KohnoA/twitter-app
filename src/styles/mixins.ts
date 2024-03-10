import { css } from 'styled-components';

import { generalTheme } from './theme';

export const interactive = () => css`
  transition: opacity ${({ theme }) => theme.duration}ms;
  cursor: pointer;

  &:hover {
    opacity: ${({ theme }) => theme.opacity.low};
  }

  &:active {
    opacity: ${({ theme }) => theme.opacity.high};
  }
`;

export const bgImage = (imgPath: string) => css`
  background-image: url(${imgPath});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const flex = (justify = 'center', align = 'center') => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
`;

export const media =
  (key: keyof typeof generalTheme.breakpoints) => (style: TemplateStringsArray | string) =>
    `@media (max-width: ${generalTheme.breakpoints[key]}px) { ${style} }`;
