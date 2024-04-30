import main from "../../../components/mainComponent/main";
import header from "../../../components/headerComponent/headerComponent";
document.addEventListener("DOMContentLoaded", pageLandingRendering);

/**
 * Header, footer and main section are appended to this function and finally it renders the landing page.
 * @function pageLandingRendering
 */
function pageLandingRendering() {
  const body = document.body;
  //   prepend header here:
  //   ...
  body.prepend(header());
  //   append main section here:
  body.appendChild(main());
  //   append main section here:

  //   prepend footer here:
  //   ...
}
