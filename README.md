npm typeahead
=============

[![Build Status](https://travis-ci.org/bcoe/npm-typeahead.png)](https://travis-ci.org/bcoe/npm-typeahead)

A tiny application that exposes typeahead search functionality for [npm packages](http://www.npmjs.org).

You can try it out here:

http://npm-typeahead.herokuapp.com

Why?
---

*npm-typeahead* was put together as part of an article for [CODE Magazine](http://www.codemag.com/magazine). It demonstrates Node.js best practices, and outlines:

* using [node-restify](https://github.com/mcavage/node-restify), to get a bare-bones server up and running.
* using [browserify](https://github.com/substack/node-browserify), to install client-side dependencies using npm.
* using [typeahead.js](http://twitter.github.io/typeahead.js/), to perform typeahead search on the npm package registry.

Usage
-----
* **npm test:** run the mocha unit tests.
* **npm start:** run the web-server.
* **npm run-script build:** build the client-side dependencies.
