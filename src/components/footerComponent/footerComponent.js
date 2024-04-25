import domGenerator from "dom-generator";
import "./index.scss";

export const rowTitle = [
  {
    rowTitle: "سفیر",
    obj: {
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
  {
    rowTitle: "سفیر",
    obj: {
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

const footer = document.createElement("footer");
footer.setAttribute("id", "footer");
rowTitle.forEach((title) => {
  const rowElement = rowGenerator(title.rowTitle, title.obj.textElement);
  footer.appendChild(rowElement);
});
// Append the footer to the body
document.body.appendChild(footer);

function footerGenerator(rowTitle) {
  const footerElement = document.body.appendChild(
    domGenerator({
      tag: "footer",
      attributes: { id: "footer" },
      children: rowTitle.forEach((title) => {
        const rowElement = rowGenerator(title.rowTitle, title.obj.textElement);
        console.log(rowElement);
        return rowElement;
      }),
    })
  );
  return footerElement;
}
footerGenerator(rowTitle);

/**
 * @param {string} rowTitle
 * @param {Array} textElements
 * @returns {HTMLElement}
 */
export function rowGenerator(rowTitle, textElements) {
  const rowElement = domGenerator({
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
        children: textElements.map((textObj) => ({
          tag: "div",
          attributes: { class: "text-element" },
          properties: { textContent: textObj.text },
        })),
      },
    ],
  });

  return rowElement;
}
