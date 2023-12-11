const { createVuePlugin } = require('vite-plugin-vue2');
const path = require('path');
const { defineConfig } = require('vite');
import { transform } from 'lightningcss';
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
    copy({
      hook: "writeBundle",
      targets: [
        {
          src: 'public/style.css',
          dest: 'dist',
          rename: 'style.css'
        },
        {
          src: 'public/style.css',
          dest: 'dist',
          rename: 'style.min.css',
          transform: (source) => {
            let { code } = transform({
              filename: 'style.css',
              minify: true,
              code: source
            })
            return code.toString()
          }
        }
      ]
    }),
    createVuePlugin()
  ]
});
