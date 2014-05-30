var typeahead = require('typeahead.js');

module.exports = function(opts) {
  // wait until the document finishes loading,
  // so that we know all of DOM elements will
  // be bindable.
  opts.$(document).ready(function() {

    // Create the engine, used to interact
    // with our search backend.
    var engine = new Bloodhound({
      name: 'packages',
      local: [],
      remote: opts.searchUrl + '/search?q=%QUERY',
      datumTokenizer: function(d) {
        return Bloodhound.tokenizers.whitespace(d.val);
      },
      queryTokenizer: Bloodhound.tokenizers.whitespace
    });

    engine.initialize();

    // attach the typeahead extension to
    // our search box using jQuery.
    var typeahead = opts.$('#package-search .typeahead').typeahead(
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

    // if we hit enter, perform a search.
    opts.$('#search-container').on('keypress', function(event) {
      if (event.keyCode == 13) {
        window.location.href = opts.npmUrl + '/search?q=' + typeahead.typeahead('val');
      }
    });

    // if we auto-complete, or click a package,
    // open the package directly on npm.
    var packagePage = function() {
      return opts.npmUrl + '/package/' + typeahead.typeahead('val');
    };

    typeahead.on('typeahead:selected', function() {
      window.location.href = packagePage();
    });

    typeahead.on('typeahead:autocompleted', function() {
      window.location.href = packagePage();
    });
  });
};
