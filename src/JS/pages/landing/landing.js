"use strcit";

import footerGenerator from "../../../components/footerComponent/renderFooterComponent";
import header from "../../../components/headerComponent/headerComponent";
import main from "../../../components/mainComponent/main";
import "../../../styles/index.scss";

document.addEventListener("DOMContentLoaded", pageLandingRendering);

/**
 * Header, footer, and main section are appended to this function and finally, it renders the landing page.
 * @function pageLandingRendering
*/
function pageLandingRendering() {
  const body = document.body;
  // Select the app to place main in it
  const app = document.querySelector(".app")

  // prepend header here:
  body.prepend(header());
  // append main section here:
  app.appendChild(main());
  //   append footer here:
  body.append(footerGenerator());
}