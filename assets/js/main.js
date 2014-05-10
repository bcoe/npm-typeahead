// Browser-side code for performing
// type-ahead searches. Uses browserify
// to include dependencies.
// build assets using: npm run-script build.
var $ = window.jQuery = require('jquery');
var typeahead = require('typeahead.js');

// bootstrap typeahead suggestions
// once the document finishes loading
$(document).ready(function() {

  // Create the engine, used to interact
  // with our search backend.
  var engine = new Bloodhound({
    name: 'packages',
    local: [],
    remote: '/search?q=%QUERY',
    datumTokenizer: function(d) {
      return Bloodhound.tokenizers.whitespace(d.val);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace
  });

  engine.initialize();

  // attach the type-ahead extension to
  // our search box using jQuery.
  $('#package-search .typeahead').typeahead(
    {
      hint: true,
      highlight: true,
      minLength: 1
    },
    {
      name: 'states',
      displayKey: 'value',
      source: engine.ttAdapter()
    }
  );
});
