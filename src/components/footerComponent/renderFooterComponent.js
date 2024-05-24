"use strict";

import domGenerator from "dom-generator";
import { columnGenerator } from "./footerComponent";
import { rowImage } from "./footerComponent";
import { copyRight } from "./footerComponent";

/**
 * Generates a footer element and appends it to the document body.
 * @returns {HTMLElement} The generated footer element.
 */
export default function footerGenerator() {
  return domGenerator({
    tag: "footer",
    attributes: { id: "footer" },
    children: [
      {
        tag: "div",
        attributes: { class: "top-footer" },
        dataAttributes: { font: "iranSans" },
        children: columnGenerator().map((column) => ({
          tag: column.tag,
        })),
      },
      // append rowImage part
      {
        tag: rowImage(),
      },
      // append copyRight part
      {
        tag: copyRight(),
      },
    ],
  });
}
