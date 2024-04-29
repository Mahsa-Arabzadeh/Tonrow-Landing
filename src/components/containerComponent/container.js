import domGenerator from "dom-generator";
// import all section here:
import { whyTonrowGenerator } from "../whyTonrowComponent/whyTonrowComponent";
// ...
// import all section here:
import "./index.scss";

/**
 * @returns {HTMLElement} - container Dom element.
 */
function containerComponent() {
  const container = domGenerator({
    tag: "container",
    attributes: { class: "container" },
    children: [
      {
        tag: whyTonrowGenerator(),
      },
    ],
  });
  return container;
}

export default containerComponent;
