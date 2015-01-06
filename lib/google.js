
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

module.exports.search = function *(query) {
  var res = yield get(google + encodeURI(query));
  var $ = cheerio.load(res[0].body);
  var results = [];
  var url = /url\?q=(.*)?(?=&sa)/;
  $('li.g').each(function(i, el) {
    var link = $(el).find('h3 a').attr('href');
    // if (link.match(url)) link = link.match(url)[1];
    results.push({
      title: $(el).find('h3 a').text(),
      link: link,
      blurb: $(el).find('span.st').text()
    });
  });
  return results;
};
