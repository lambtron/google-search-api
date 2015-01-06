
/**
 * Module dependencies.
 */

var thunkify = require('thunkify-wrap');
var request = require('request');
var cheerio = require('cheerio');
var get = thunkify(request.get);

/**
 * Static variables.
 */

var google = 'https://www.google.com/search?q=';

/**
 * Get first page text results.
 *
 * @param {String} query
 *
 * @return {Array}
 */

module.exports.results = function *(query) {
  var res = yield get(google + encodeURI(query));
  var $ = cheerio.load(res.text);
  var results = [];
  $('li.g').each(function(i, el) {
    results.push({
      title: $(el).find('h3 a').text(),
      link: $(el).find('h3 a').attr('data-href'),
      blurb: $(el).find('span.st').text()
    });
  });
  return results;
};