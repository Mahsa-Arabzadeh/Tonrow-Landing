"use strict";

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

    // return element.
    return domGenerator({
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
                attributes: { class: "text-element", href: textObj.linkHref },
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
                  href: `${textObj.linkHref ?? "#"}`,
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
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * Creates a row of images based on the provided image sources.
 * @returns {HTMLElement} - The container element for the row of images.
 */
export function rowImage() {
  // Iterate over each image source and create corresponding img elements
  const imgElementTag = rowImageFooter.map((item) => {
    const imgElement = domGenerator({
      tag: "img",
      attributes: { class: "footer-imgsrc", src: item.imgSrc },
    });
    return { tag: imgElement };
  });
  return domGenerator({
    tag: "div",
    attributes: { class: "row-images" },
    // Append the image element to the rowImagesContainer
    children: imgElementTag.map((item) => ({
      tag: item.tag,
    })),
  });
}

/**
 * Generates a footer element containing copyright information.
 * @returns {HTMLElement} - The footer element containing copyright information.
 */
export function copyRight() {
  return domGenerator({
    tag: "div",
    attributes: { class: "footer-copyright" },
    properties: {
      textContent: "تمام حقوق مادی و معنوی این وبسایت متعلق به تنرو است.",
    },
  });
}

export function columnGenerator() {
  const columns = colFooterGenerator.map((column) => {
    const columnTag = domGenerator({
      tag: "div",
      attributes: { class: "column-tag" },
    });

    if (column.length) {
      column.forEach((item) => {
        columnTag.appendChild(
          rowGenerator(item.colTitle, item.colText, item.imgSrc)
        );
      });
    }
    if (column.length > 1) {
      columnTag.classList.add("hide-column-tag");
    }

    // return colText object to this tag.
    return {
      tag: columnTag,
    };
  });

  return columns;
}
