/*
|-------------------------------------------------------------------------------
| Development config               https://maizzle.com/docs/environments/#local
|-------------------------------------------------------------------------------
|
| The exported object contains the default Maizzle settings for development.
| This is used when you run the `maizzle build` or `maizzle serve` and it
| has the fastest build time, since most transformations are disabled.
|
*/

module.exports = {
  build: {
    templates: {
      source: 'src/templates',
      destination: {
        path: 'dist/templates',
      },
      assets: {
        source: 'src/assets/images',
        destination: 'images',
      },
    },
  },
  inlineCSS: {
    mergeLonghand: true,
  },
  prettify: true,
  removeUnusedCSS: true,
}
