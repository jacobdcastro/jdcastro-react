# gatsby-plugin-local-font-loader

## w/ pathsToFontFiles

1. Take path to font files
2. Read each font file with node + opentype.js
3. Create @font-face instance from data file
4. Inject minified @font-face string into style tag
5. Place style tag into header

## w/ pathToStylesheet

1. Take path to stylesheet
2. check if in static folder

- if in static, create <link/> for file from there
- if in src, create fileNode or get from webpack??
- can ONLY be in static or src folder

3. Inject link tag into <head>
