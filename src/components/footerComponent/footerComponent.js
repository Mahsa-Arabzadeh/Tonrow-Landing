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
footer.appendChild(copyRight());
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

/**
 * Creates a row of images based on the provided image sources.
 * @returns {HTMLElement} - The container element for the row of images.
 */
function rowImage() {
  const rowImageContainer = domGenerator({
    tag: "div",
    attributes: { class: "row-images" },
  });
  // Iterate over each image source and create corresponding img elements
  rowImageFooter.forEach((item) => {
    const imgElement = domGenerator({
      tag: "img",
      attributes: { class: "footer-imgsrc", src: item.imgSrc, alt: "" },
    });
    // Append the image element to the rowImagesContainer
    rowImageContainer.appendChild(imgElement);
  });

  return rowImageContainer;
}

/**
 * Generates a footer element containing copyright information.
 * @returns {HTMLElement} - The footer element containing copyright information.
 */
function copyRight() {
  const copyRight = domGenerator({
    tag: "div",
    attributes: { class: "footer-copyright" },
    properties: {
      textContent: "تمام حقوق مادی و معنوی این وبسایت متعلق به تنرو است.",
    },
  });

  return copyRight;
}
