import domGenerator from "dom-generator";
import "./index.scss";

/**
 *
 * @param {rowTitle} rowTitle
 * @returns {HTMLElement}
 */
function rowGenerator(rowTitle) {
  const rowElement = {
    tag: "div",
    attributes: { class: "row-footer" },
    children: [
      {
        tag: "h3",
        attributes: { class: "row-title" },
        properties: { textContent: rowTitle },
      },
      {
        tag: "div",
        attributes: { class: "text-container" },
        children: [],
      },
    ],
  };

  return rowElement;
}

export default rowGenerator;
