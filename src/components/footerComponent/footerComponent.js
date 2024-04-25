import domGenerator from "dom-generator";
import "./index.scss";

const rowTitle = [
  {
    rowTitle: "سفیر",
    rowLinksText: {
      textElement: [
        {
          text: "fjdj",
        },
        {
          text: "fjdj",
        },
      ],
    },
  },
];

rowTitle.map((title) => {
  rowGenerator(title.rowTitle, title.rowLinksText.textElement);
});

/**
 * @param {string} rowTitle
 * @param {Array} textElements
 * @returns {HTMLElement}
 */
export function rowGenerator(rowTitle, textElements) {
  const textChildren = textElements.map((textObj) => ({
    tag: "div",
    attributes: { class: "text-element" },
    properties: { textContent: textObj.text },
  }));

  const rowElement = document.body.appendChild(
    domGenerator({
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
          children: textChildren,
        },
      ],
    })
  );

  return rowElement;
}
