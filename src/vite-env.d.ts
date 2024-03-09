declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGElement>>;
  export default content;
}

declare module '*.jpg';
declare module '*.png';
declare module '*.woff';

/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
