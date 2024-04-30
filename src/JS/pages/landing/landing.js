import header from "../../../components/headerComponent/headerComponent";
import main from "../../../components/mainComponent/main";

document.addEventListener("DOMContentLoaded", pageLandingRendering);

/**
 * Header, footer and main section are appended to this function and finally it renders the landing page.
 * @function pageLandingRendering
 */
function pageLandingRendering() {
  const body = document.body;

  // Append header here
  body.prepend(header());

  // Append main section here
  body.appendChild(main());

  // Append footer here
  // ...
}
