// KISS web-server using Restify. Exposes
// a search interface for packages on npm.
// run using: npm start
// build assets using: npm run-script build.
var restify = require('restify'),
  server = restify.createServer(),
  search = new (require('./lib').Search);

server.use(restify.queryParser());

// lookup packages by their name.
server.get('/search', function(req, res, cb) {
  search.search(req.params.q, function(err, results) {
    res.send(results);
    cb();
  });
});

// serve static JavaScript and CSS.
server.get(/\/js|css|images\/?.*/, restify.serveStatic({
  directory: './assets'
}));

// serve the static index page.
server.get(/\/?/, restify.serveStatic({
  directory: './assets',
  default: 'index.html'
}));

// bind server to on port 5000, or the port provided.
server.listen(process.env.PORT || 5000, function () {
  console.log('%s listening at %s', server.name, server.url);
});
