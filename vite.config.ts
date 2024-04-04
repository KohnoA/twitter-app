import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE');

  return {
    define: { 'process.env': JSON.stringify(env) },
    plugins: [
      svgr({ include: '**/*.svg', svgrOptions: { icon: true } }),
      react({
        plugins:
          mode === 'production'
            ? [['@swc/plugin-react-remove-properties', {}]]
            : [['@swc/plugin-styled-components', {}]],
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  };
});
