# appendHTML.js

This script allows you to inject external content form HTML files into elements on your webpage. For example, it can be particularly useful for loading a common header, sidebar or footer for a static website.

## How to use

1.  Include the script on your webpage.

```html
`<script src="path/to/appendHTML.js"></script>` 
```

2.  Add the "addHTML" attribute to the elements on your webpage where you want to load the HTML files. The value of the attribute should be the URL of the HTML file you want to load.

```html
`<div addHTML="path/to/file.html"></div>` 
```

3.  The script will automatically search for elements with the "addHTML" attribute and load the HTML files into them.

## Features

-   Caching: The script stores loaded HTML files in a cache to reduce loading time when the same files are reused.
-   Lazy loading: The script only loads the HTML files when the element is scrolled into view.
-   Error handling: The script displays a "Page not found." message if the file is not found and "An error occurred." message if there is an error.

## Note

-   Make sure that the server allows CORS (Cross-Origin Resource Sharing) for the HTML files you want to load.

## Dependencies

This script uses the `fetch` API and the `Map` object, which are both supported by modern browsers.

## Inspired by :
<a href="https://github.com/lassv/includerjs">includerjs</a>
