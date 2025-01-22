// initial vite configuration
import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import postcssImport from 'postcss-import'
import postcssMixins from 'postcss-mixins'
import postcssFunctions from 'postcss-functions'
import postcssPresetEnv  from 'postcss-preset-env'
import fs from 'node:fs'

// Define a type for web development-related file extensions
type WebFileExtension = '.html' | '.css' | '.js' | '.ts' | '.jsx' | '.tsx' | '.json' | '.svg' | '.png' | '.jpg' | '.jpeg' | '.gif';


// Function to get all files of a specific type in the root directory
/**
 * @param dir the directory path to get files from
 * @param extension the file extension to filter by (e.g., '.html', '.js')
 * @returns all the files with the specified extension in the given directory
 */
function getFiles(dir: string, extension: WebFileExtension): string[] {
  return fs.readdirSync(dir).filter(file => file.endsWith(extension))
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
      input: getFiles(__dirname, '.html').reduce((acc, file) => {
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