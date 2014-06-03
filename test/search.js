// Tests for server-side search functionality.
// run using: npm test
var assert = require('assert'),
  Search = require('../lib').Search,
  _ = require('lodash');

describe("Search", function() {
  it('should return return an array of package names', function(done) {
    var search = new Search();
    search.search('*', function(err, packages) {
      assert(Array.isArray(packages));
      return done();
    });
  });

  it('should return packages beginning with the prefix provided', function(done) {
    var search = new Search();
    search.search('nod', function(err, packages) {
      var selected = _.select(packages, function(package) {
        return package.value.indexOf('nod') > -1;
      });
      assert.equal(selected.length, 10);
      return done();
    });
  });

  it('should return an empty array if no packages match the prefix', function(done) {
    var search = new Search();
    search.search('zzzzzzzzzz', function(err, packages) {
      assert.equal(packages.length, 0);
      return done();
    });
  });
});
