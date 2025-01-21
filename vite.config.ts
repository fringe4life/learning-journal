// initial vite configuration
import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import postcssImport from 'postcss-import'
import postcssMixins from 'postcss-mixins'
import postcssFunctions from 'postcss-functions'
import postcssPresetEnv  from 'postcss-preset-env'
export default defineConfig({
  plugins: [],
  build: {
    minify: true, // or 'esbuild'
    terserOptions: {
      compress: false,
      mangle: false,
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // Specify the entry point
      },
      output: {
        dir: 'dist',
        format: 'esm',
      },
    },
  },
  css: {
    postcss: {
          plugins: [
            postcssFunctions(), // Use CSS functions in your CSS
            postcssImport(),  // Import CSS modules
            postcssMixins(),
            postcssPresetEnv({
                stage: 0,
              features: {
                'custom-media-queries': true,
              },
            }),
        ]
    }
  },
  esbuild: {
    legalComments: 'none',
    target: 'es2021',
  }
})