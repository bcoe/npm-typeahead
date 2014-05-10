npm typeahead
=============

[![Build Status](https://travis-ci.org/bcoe/npm-typeahead.png)](https://travis-ci.org/bcoe/npm-typeahead)

A tiny web-app that exposes type-ahead search functionality for packages on http://www.npmjs.org.

You can try it out here:

Why?
---

*npm-typeahead* was put together for an article demonstrating Node.js best practices, and demonstrates:

* using **node-restify**, to get a bare-bones server up and running.
* using **browserify**, to install client-side dependencies using npm.
* using **typeahead.js**, to perform typeahead search on the npm package registry.

Usage
-----
* **npm test:** run the mocha unit tests.
* **npm start:** run the web-server.
* **npm run-script build:** build the client-side dependencies.
