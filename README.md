<svg viewBox="0 0 501.56 887.72" fill="#e43f3f" height="36px"><path d="M190.76 696.96l60.02-60.02v120.03H130.74l60.02-60.01zm37.21-352.62h52.67l-26.33 26.33-26.34-26.33zM76.95 211.91l45.55 45.55 45.55 45.55h-91.1v-91.1zm259.8 91.1l45.55-45.55 45.55-45.55v91.1h-91.1zM254.31 310.19L35.21 91.1V0l45.55 45.55 45.55 45.55H382.3L473.4 0v91.1L254.31 310.19zm247.25 75.97v501.56L250.78 636.94 0 386.16h501.56z"/></svg>

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
