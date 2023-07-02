/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const frontend = '{{project_name}}/frontend'

const root = path.resolve(__dirname, frontend);
const base = '/static/frontend/';

export default defineConfig({
  root,
  base,
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, frontend,'/src')
    },
  },
  
  plugins: [react()],
  
  build: {
    outDir: path.resolve(__dirname, frontend, base),
    assetsDir: '.',
    emptyOutDir: true,
    rollupOptions: {
      input: root + '/src/main.jsx',
      output: {
        entryFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
});
