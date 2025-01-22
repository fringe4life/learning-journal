# Learning Journal

## Project Overview

This project is a learning journal website built with modern web technologies.
It uses Vite as a build tool and incorporates TypeScript for enhanced type
safety.

## Features

- Multiple HTML pages (index.html, aboutme.html, featured-article.html)
- Responsive design with custom CSS
- TypeScript for improved developer experience
- PostCSS for advanced CSS features and optimizations

## Tech Stack

- Vite
- TypeScript
- PostCSS
- CSS Modules

## Project Structure

- `src/`: Source files
  - `images/`: Image assets
  - `styles/`: CSS files
    - Modular CSS files for different components (header.css, post.css, etc.)
  - `main.ts`: Main TypeScript file
  - `data.ts`: Data file (likely for blog posts)
  - `typeHelpers.ts`: TypeScript helper functions
- `public/`: Static assets
- `index.html`: Main HTML file
- `aboutme.html`: About Me page
- `featured-article.html`: Featured Article page
- `vite.config.ts`: Vite configuration file

## Setup and Installation

1. Clone the repository
2. Install dependencies:

## PostCSS Plugins Used

- postcss-import: For importing CSS files
- postcss-mixins: For CSS mixins
- postcss-functions: For using functions in CSS
- postcss-preset-env: For modern CSS features and browser compatibility

## Notes

- The project uses custom media queries and CSS variables for responsive design.
- TypeScript is configured for strict type checking.
- The build process is optimized for performance, including minification and
  dropping console logs in production.
