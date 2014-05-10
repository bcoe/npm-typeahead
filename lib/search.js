var _ = require('lodash'),
  elasticsearch = require('elasticsearch');

function Search(opts) {
  _.extend(this, {
    client: new elasticsearch.Client({
      host: process.env.ELASTIC_SEARCH_URL || 'localhost:9200'
    })
  }, opts);
}

// The search method called by server.js.
Search.prototype.search = function(q, cb) {
  this.client.search({
    index: 'npm',
    size: 50,
    body: {
      sort: [{stars: {order: 'desc'}}],
      query: {
        query_string: {
          fields: ['_id'],
          query: q + '*'
        }
      }
    }
  }, function(err, resp) {
    return cb(
      err,
      // return only the _id (the name of the
      // package on npm.). store this on the value
      // key, which is expected by typeahead.js.
      _.map(resp.hits.hits, function(hit) {
        return {value: hit._id};
      })
    );
  });
};

exports.Search = Search;
