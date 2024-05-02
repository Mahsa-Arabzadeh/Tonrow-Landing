import domGenerator from "dom-generator";
import { colFooterGenerator, rowImageFooter } from "./data";
import "./index.scss";

/**
 * @param {string} colTitle
 * @param {Array} colText
 * @returns {HTMLElement}
 */
function rowGenerator(colTitle, colText, imgSrc) {
  try {
    // error handler:
    if (!colText.length || !colTitle || !Array.isArray(colText)) {
      return;
    }

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
                  attributes: { src: imgSrc },
                },
              ],
            },
            {
              tag: "div",
              attributes: { class: "text-container" },
              children: colText.map((textObj) => ({
                tag: "div",
                attributes: { class: "text-element", src: textObj.linkHref },
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
                tag: "a",
                attributes: {
                  class: "text-element",
                  src: `${textObj.linkHref ?? "#"}`,
                },
                // ----------------
                dataAttributes: {
                  decoration: textObj.decoration,
                },
                properties: { textContent: textObj.text },
              })),
            },
          ];
        }
      })(),
    });
    // return element.
    return rowElement;
  } catch (error) {
    console.log(error.message);
  }
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
      attributes: { class: "footer-imgsrc", src: item.imgSrc },
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

    // remove column with more than one object.
    if (column.length > 1 && window.innerWidth <= 900) {
      column.forEach((item) => {
        columnTag.appendChild(
          rowGenerator(item.colTitle, item.colText, item.imgSrc)
        );
        columnTag.style.display = "none";
      });
    }
    // show column with only one object.
    if (column.length <= 1 && window.innerWidth <= 900) {
      column.forEach((item) => {
        columnTag.appendChild(
          rowGenerator(item.colTitle, item.colText, item.imgSrc)
        );
      });
    }
    // if window innerwidth more than 900 we can see all of the objects.
    if (column.length && window.innerWidth > 900) {
      {
        column.forEach((item) => {
          columnTag.appendChild(
            rowGenerator(item.colTitle, item.colText, item.imgSrc)
          );
        });
      }
    }

    return {
      tag: columnTag,
    };
  });

  const footerElement = domGenerator({
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

  return footerElement;
}

export default footerGenerator;

// TODO:
// fix links; ✔
// responsive for items text.
// beyne section ha
