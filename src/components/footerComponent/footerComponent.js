import domGenerator from "dom-generator";
import { colFooterGenerator, rowImageFooter } from "./data";
import "./index.scss";

/**
 * @param {string} rowTitle
 * @param {Array} textElements
 * @returns {HTMLElement}
 */
function rowGenerator(colTitle, colText, imgSrc) {
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

/**
 * Generates a footer element and appends it to the document body.
 * @returns {HTMLElement} The generated footer element.
 */
function footerGenerator() {
  const columns = colFooterGenerator.map((column) => {
    const columnTag = domGenerator({
      tag: "div",
      attributes: { class: "test" },
    });

    column.forEach((item) => {
      columnTag.appendChild(
        rowGenerator(item.colTitle, item.colText, item.imgSrc)
      );
    });

    return {
      tag: columnTag,
    };
  });

  const footerElement = document.body.appendChild(
    domGenerator({
      tag: "footer",
      attributes: { id: "footer" },
      children: [
        {
          tag: "div",
          attributes: { class: "top-footer" },
          children: columns.map((column) => ({
            tag: column.tag,
          })),
        },
        {
          tag: rowImage(),
        },
        {
          tag: copyRight(),
        },
      ],
    })
  );

  return footerElement;
}

export default footerGenerator;
