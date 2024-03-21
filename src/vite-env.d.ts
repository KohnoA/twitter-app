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
/// <reference types="types/styles/theme" />

interface ImportMetaEnv {
  VITE_APP_TITLE: string;
  VITE_FIREBASE_API_KEY: string;
  VITE_FIREBASE_AUTH_DOMAIN: string;
  VITE_FIREBASE_PROJECT_ID: string;
  VITE_FIREBASE_STORAGE_BUCKET: string;
  VITE_FIREBASE_MESSAGING_SENDER_ID: string;
  VITE_FIREBASE_APP_ID: string;
  VITE_MEASUREMENT_ID: string;
  VITE_PROD: boolean;
}

interface ImportMeta {
  readonly env: Readonly<ImportMetaEnv>;
}
