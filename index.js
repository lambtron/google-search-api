
var thunkify = require('thunkify-wrap');
var request = require('request');
var cheerio = require('cheerio');
var get = thunkify(request.get);
var co = require('co');

var google = 'https://www.google.com/search?q=';
var query = 'cat';

co(function*() {
  var res = yield get(google + query);
  var $ = cheerio.load(res[0].body);

  $('li.g').each(function(i, el) {
    var result = {
      title: $(el).find('h3 a').text(),
      link: $(el).find('h3 a').attr('href'),
      blurb: $(el).find('span.st').text()
    };

    // after /url?q= and before &sa=
    var url = /url\?q=(.*)?(?=&sa)/;

    console.log(result.link);
    result.link = result.link.match(url);
    console.log(result.link);

    console.log('\n\n\n\n');
  });

});
