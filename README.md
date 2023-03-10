# appendHTML.js

<div>
  <img src="https://img.shields.io/github/stars/mobiwise-dev/appendHTML.js">
  <img src="https://img.shields.io/github/watchers/mobiwise-dev/appendHTML.js">
  <img src="https://img.shields.io/github/downloads/mobiwise-dev/appendHTML.js/total">
  <img src="https://img.shields.io/github/size/mobiwise-dev/appendHTML.js/appendHTML.js">
  <a href="https://ko-fi.com/mobiwise" target="_blank">
  <img src="https://img.shields.io/badge/Support%20Me-Buy%20Me%20a%20Coffee-red">
  </a>
</div>

This script allows you to inject external content from HTML files into elements on your webpage. For example, it can be particularly useful for loading a common header, sidebar or footer for a static website.

## How to use

1.  Include the script on your webpage.

```html
<script src="path/to/appendHTML.js"></script>
```

2.  Add the "data-src" attribute to the elements on your webpage where you want to load the HTML files. The value of the attribute should be the URL of the HTML file you want to load.

```html
<div data-src="path/to/file.html"></div>
```

3.  The script will automatically search for elements with the "data-src" attribute and load the HTML files into them.

## Features

- Caching: The script stores loaded HTML files in a cache to reduce loading time when the same files are reused.
- Lazy loading: The script only loads the HTML files when the element is scrolled into view.
- Error handling: The script displays a "Page not found." message if the file is not found and "An error occurred." message if there is an error.

## Note

- Make sure that the server allows CORS (Cross-Origin Resource Sharing) for the HTML files you want to load.

## Dependencies

This script uses the `fetch` API and the `Map` object, which are both supported by modern browsers.

## Support Me

<a href="https://ko-fi.com/mobiwise">
  <img src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3" height="50" width="210" alt="mobiwise" target="_blank"/>
</a>
