// Browser-side code for performing typeahead searches.
// Uses browserify to manage browser-dependencies.
//
// start server: npm start
// build assets: npm run-script build.
var $ = window.jQuery = require('jquery');

require('../../lib/browser')({
  npmUrl: 'https://www.npmjs.org',
  searchUrl: '',
  $: $
});
