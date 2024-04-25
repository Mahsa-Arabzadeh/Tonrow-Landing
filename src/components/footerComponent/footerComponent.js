import domGenerator from "dom-generator";
import "./index.scss";

export const colFooterGenerator = [
  {
    colTitle: "سفیر",
    colText: [
      {
        text: "fjdj",
      },
      {
        text: "fjdj",
      },
    ],
  },
  {
    colTitle: "سفیر",
    colText: [
      {
        text: "fjdj",
      },
      {
        text: "fjdj",
      },
    ],
  },
];

const footer = document.createElement("footer");
footer.setAttribute("id", "footer");
colFooterGenerator.forEach((column) => {
  const rowElement = rowGenerator(column.colTitle, column.colText);
  footer.appendChild(rowElement);
});
// Append the footer to the body
document.body.appendChild(footer);

// function footerGenerator(colFooterGenerator) {
//   const footerElement = document.body.appendChild(
//     domGenerator({
//       tag: "footer",
//       attributes: { id: "footer" },
//       children: colFooterGenerator.forEach((title) => {
//         const rowElement = rowGenerator(title.rowTitle, title.obj.textElement);
//         console.log(rowElement);
//         return rowElement;
//       }),
//     })
//   );
//   return footerElement;
// }
// footerGenerator(colFooterGenerator);

/**
 * @param {string} rowTitle
 * @param {Array} textElements
 * @returns {HTMLElement}
 */
export function rowGenerator(colTitle, colText) {
  const rowElement = domGenerator({
    tag: "div",
    attributes: { class: "row-footer" },
    children: [
      {
        tag: "h3",
        attributes: { class: "row-title" },
        properties: { textContent: colTitle },
      },
      {
        tag: "div",
        attributes: { class: "text-container" },
        children: colText.map((textObj) => ({
          tag: "div",
          attributes: { class: "text-element" },
          properties: { textContent: textObj.text },
        })),
      },
    ],
  });

  return rowElement;
}
