// Create a new Map to store the cached HTML files
let cache = new Map();

// Function to check if an element is currently in the viewport
function isInViewport(element) {
  // Get the bounding rect of the element
  const rect = element.getBoundingClientRect();
  // Return true if all corners of the rect are within the viewport
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

// Asynchronous function to append the HTML to the element
async function appendHTML() {
  // Get all elements with the "addHTML" attribute
  const elements = document.querySelectorAll("[addHTML]");
  // Loop through the elements
  for (const element of elements) {
    // Check if the element is in the viewport or if it already has the HTML loaded
    if (isInViewport(element) || !element.hasAttribute("addHTML")) {
      // Get the file URL from the "addHTML" attribute
      const file = element.getAttribute("addHTML");
      let html;
      // Check if the file is already in the cache
      if (cache.has(file)) {
        // Get the HTML from the cache
        html = cache.get(file);
      } else {
        try {
          // Fetch the HTML file
          const response = await fetch(file);
          // Check if the response is ok
          if (response.ok) {
            // Get the HTML text
            html = await response.text();
            // Add the HTML to the cache
            cache.set(file, html);
          } else {
            // Set the HTML to "Page not found." if the response is not ok
            html = "Page not found.";
          }
        } catch {
          // Set the HTML to "An error occurred." if there is an error
          html = "An error occurred.";
        }
      }
      // Set the innerHTML of the element to the HTML
      element.innerHTML = html;
      // Remove the "addHTML" attribute
      element.removeAttribute("addHTML");
    }
  }
}
// Check the visibility of elements on page load
appendHTML();
// Add an event listener for the "scroll" event to check visibility and load elements when they come into view
window.addEventListener("scroll", appendHTML);
