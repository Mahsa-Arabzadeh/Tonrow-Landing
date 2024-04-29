import domGenerator from "dom-generator";

import containerComponent from "../containerComponent/container";

/**
 * The container is appended to this main div.
 * @returns {HTMLElement} - return a Dom element (main section).
 */
function main() {
  const main = domGenerator({
    tag: "main",
    attributes: { id: "main" },
    children: [
      {
        tag: containerComponent(),
      },
    ],
  });

  return main;
}

export default main;
