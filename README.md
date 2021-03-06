google-search-api
=================

> Simple Google search API.

![](http://media.giphy.com/media/daBOvrk2ejViU/giphy.gif)

### Request

A simple `GET` request to the endpoint with querystring `query`, as per example below:
```bash
curl https://googlesearch.herokuapp.com/api/search?query=maru+the+cat
```

### Response

An array of the results with `title`, `blurb`, and `link`:
```javascript
[
  {
    "title":"Maru (cat) - Wikipedia, the free encyclopedia",
    "blurb":"Maru (まる, Japanese: circle or round; born May 24, 2007) is a male Scottish Fold \n(straight variety) cat in Japan who has become popular on YouTube. As of April ...",
    "link": "http://en.wikipedia.org/wiki/Maru_(cat)"
  },
  {
    "title":"mugumogu - YouTube",
    "blurb":"名前：まる 種類：スコティッシュフォールド オス Name:Maru Breed:Scottish Fold Male.",
    "link": "https://www.youtube.com/user/mugumogu"
  }
  // ..
]
```

### Try it

Click [here](https://googlesearch.herokuapp.com/api/search?query=maru+the+cat).

## License (MIT)

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

