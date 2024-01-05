const { createVuePlugin } = require('vite-plugin-vue2');
const path = require('path');
const { defineConfig } = require('vite');

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
    },
    watch: true
  },
  plugins: [
    createVuePlugin()
  ]
});
