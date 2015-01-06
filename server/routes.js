
/**
 * Module dependencies.
 */

var render = require('../lib/render');
var google = require('../lib/google');

/**
 * Render index html page.
 */

module.exports.index = function *() {
  this.body = yield render('index');
};

/**
 * API routes, get search results.
 */

module.exports.search = function *() {
  var qs = this.request.query;
  if (!qs.query) return this.body = 'Need to provide query.';
  this.body = yield google.search(qs.query);
};
