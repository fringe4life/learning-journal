// initial vite configuration
import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import postcssImport from 'postcss-import'
import postcssMixins from 'postcss-mixins'
import postcssFunctions from 'postcss-functions'
import postcssPresetEnv  from 'postcss-preset-env'
import fs from 'node:fs'
// Function to get all HTML files in the root directory
function getHtmlFiles(dir: string) {
  return fs.readdirSync(dir).filter(file => file.endsWith('.html'))
}

export default defineConfig({
  plugins: [],
  build: {
    minify: true, // or 'esbuild'
    terserOptions: {
      compress: false,
      mangle: false,
    },
    rollupOptions: {
      input: getHtmlFiles(__dirname).reduce((acc, file) => {
        acc[file.replace('.html', '')] = resolve(__dirname, file)
        return acc
      }, {} as Record<string, string>),
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
    drop: ['console', 'debugger'],
  }
})