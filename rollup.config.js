import compiler from '@ampproject/rollup-plugin-closure-compiler';
import typescript from '@rollup/plugin-typescript';
export default {
  input: 'src/js/index.ts',

  plugins: [typescript(), compiler()],
  output: {
    dir: 'dist',
    format: 'es'
  },
};