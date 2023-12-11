const { createVuePlugin } = require('vite-plugin-vue2');
const path = require('path');
const { defineConfig } = require('vite');
import { transform } from 'lightningcss';
// import scss from 'rollup-plugin-scss';
import copy from 'rollup-plugin-copy';
import { createTransform } from 'rollup-copy-transform-css';

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
      verbose: true,
      targets: [
        // {
        //   src: 'public/style.css',
        //   dest: 'dist',
        //   rename: 'style.min.css',
        //   // transform: createTransform({ inline: false, minify: true })
        //   transform: function(content, filename) {
        //     console.log('transform', content, filename)
        //     // let { code, map } = transform({
        //     //   // ...
        //     //   minify: true
        //     // });
        //     // console.log('code', code, 'map', map)
        //     return content
        //   }
        // },
        {
          src: 'public/style.css',
          dest: 'public',
          // rename: 'style.min.css',
          rename: (name, extension, fullPath) => {
            console.log('rename()', 'name', name, 'extension', extension, 'fullPath', fullPath)
            return `${name}.min.${extension}`
          },
          // transform: createTransform({ inline: true, minify: true, map: { inline: true }}),
          transform: (source, id) => {
            console.log('transform()', 'source', source, 'typeof', typeof(source), 'id', id) 
            let { code } = transform({
              filename: 'public/style.min.css',
              minify: true,
              code: source
            })
            return code.toString()
          },
          // copySync: true
        },
        {
          src: 'public/style.css',
          dest: 'tmp',
          rename: 'style.css',
          // copySync: true
        }
      ]
    }),
    createVuePlugin()
  ]
});
