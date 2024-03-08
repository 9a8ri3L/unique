import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  format: ['cjs', 'esm'],
  dts: true,
  splitting: true,
  cjsInterop: true,
  entry: { 'lib/index': './src/index.ts' },
});
