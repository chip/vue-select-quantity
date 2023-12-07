const { createVuePlugin } = require('vite-plugin-vue2');
const path = require('path');
const { defineConfig } = require('vite');
import scss from 'rollup-plugin-scss';
import copy from 'rollup-plugin-copy';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.js'),
      name: 'VueSelectQuantity',
      fileName: (format) => `vue-select-quantity.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [
    scss({
      name: 'vue-select-quantity.min.css',
      sourceMap: false,
      outputStyle: 'compressed'
    }),
    copy({
      verbose: true,
      targets: [
        {
          src: 'public/vue-select-quantity.css',
          dest: 'dist',
          rename: 'vue-select-quantity.css',
        }
      ]
    }),
    createVuePlugin()
  ]
});
