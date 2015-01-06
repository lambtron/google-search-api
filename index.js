
var request = require('superagent');
var cheerio = require('cheerio');

var query = 'cat';

request
  .get('https://www.google.com/search?q=' + encodeURI(query))
  .end(function(err, res) {
    var $ = cheerio.load(res.text);
    console.log($('li.g'));
  });
