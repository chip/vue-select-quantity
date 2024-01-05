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
    watch: true,
    minify: false
  },
  plugins: [
    createVuePlugin()
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '@assets', replacement: path.resolve(__dirname, './src/assets') },
      { find: '@dist', replacement: path.resolve(__dirname, './dist') }
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/global.scss";`
      }
    }
  }
});
