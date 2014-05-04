var restify = require('restify'), // require the restify library.
  server = restify.createServer(); // create an HTTP server.

server.get(/\/js|css\/?.*/, restify.serveStatic({
  directory: './assets'
}));

server.get(/\/?/, restify.serveStatic({
  directory: './assets',
  default: 'index.html'
}));

server.listen(process.env.PORT || 5000, function () { // bind server to port 5000.
  console.log('%s listening at %s', server.name, server.url);
});
