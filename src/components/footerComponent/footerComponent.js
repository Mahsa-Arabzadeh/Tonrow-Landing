import domGenerator from "dom-generator";
import { colFooterGenerator, rowImageFooter } from "./data";
import "./index.scss";

// ########################################
const footer = document.createElement("footer");
footer.setAttribute("id", "footer");
const topFooter = document.createElement("div");
topFooter.setAttribute("class", "top-footer");
footer.appendChild(topFooter);
footer.appendChild(rowImage());
colFooterGenerator.forEach((column) => {
  const div = document.createElement("div");
  div.setAttribute("class", "test");
  topFooter.appendChild(div);
  column.forEach((item) => {
    div.appendChild(rowGenerator(item.colTitle, item.colText, item.imgSrc));
  });
});

// Append the footer to the body
document.body.appendChild(footer);
// ########################################

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
export function rowGenerator(colTitle, colText, imgSrc) {
  const rowElement = domGenerator({
    tag: "div",
    attributes: { class: "col-footer" },
    children: (() => {
      if (imgSrc) {
        return [
          {
            tag: "div",
            attributes: { class: "image-container" },
            children: [
              {
                tag: "h3",
                attributes: { class: "col-title" },
                properties: { textContent: colTitle },
              },
              {
                tag: "img",
                attributes: { src: imgSrc, alt: "" },
              },
            ],
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
        ];
      } else {
        return [
          {
            tag: "h3",
            attributes: { class: "col-title" },
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
        ];
      }
    })(),
  });

  return rowElement;
}

export function rowImage() {
  const rowImageContainer = domGenerator({
    tag: "div",
    attributes: { class: "row-images" },
  });

  rowImageFooter.forEach((item) => {
    const imgElement = domGenerator({
      tag: "img",
      attributes: { class: "footer-imgsrc", src: item.imgSrc, alt: "" },
    });
    rowImageContainer.appendChild(imgElement);
  });

  return rowImageContainer;
}
