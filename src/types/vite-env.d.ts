declare module '*.svg' {
  import React from 'react';

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module '*.jpg';
declare module '*.png';
declare module '*.woff';

/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
/// <reference types="types/theme" />
