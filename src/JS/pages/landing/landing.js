import footerGenerator from "../../../components/footerComponent/footerComponent";
import header from "../../../components/headerComponent/headerComponent";
import main from "../../../components/mainComponent/main";

document.addEventListener("DOMContentLoaded", pageLandingRendering);

/**
 * Header, footer, and main section are appended to this function and finally, it renders the landing page.
 * @function pageLandingRendering
 */
function pageLandingRendering() {
  const body = document.body;

  // Function to reload the page
  function reloadPage() {
    location.reload(); // Reload the page
  }

  let hasReloadedOnce = false; // Variable to track if the page has reloaded once

  // Function to handle window resize
  function handleWindowResize() {
    // Check if the window width is below 900px
    if (window.innerWidth < 900) {
      // Check if the page has not reloaded once
      if (!hasReloadedOnce) {
        hasReloadedOnce = true; // Update the flag to indicate the page has reloaded once
        reloadPage(); // Reload the page
      }
    } else {
      // Reset the flag when the window width goes above 900px
      hasReloadedOnce = false;
    }
  }

  // Add event listener for window resize
  window.addEventListener("resize", handleWindowResize);

  // prepend header here:
  body.prepend(header());
  // append main section here:
  body.appendChild(main());
  // append footer here:
  body.appendChild(footerGenerator());
}
