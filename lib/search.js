var _ = require('lodash'),
  elasticsearch = require('elasticsearch');

function Search(opts) {
  _.extend(this, {
    client: new elasticsearch.Client()
  }, opts);
}

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
      // package on npm.)
      _.map(resp.hits.hits, function(hit) {
        return hit._id;
      })
    );
  });
};

exports.Search = Search;
