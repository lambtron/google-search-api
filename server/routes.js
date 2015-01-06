
/**
 * Module dependencies.
 */

var render = require('../lib/render');

/**
 * Define `Routes` and `dodo`.
 */

var Routes = {};

/**
 * Render index html page.
 */

Routes.index = function *index() {
  this.body = yield render('index');
};

/**
 * Expose `Routes`.
 */

module.exports = Routes;
