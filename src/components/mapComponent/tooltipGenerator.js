"use strict";

import domGenerator from "dom-generator";

// tooltips data
const dataContentTooltip = [
  "درخواست سفیر",
  "قبول درخواست توسط نزدیک ترین سفیر",
  "حضور در مبدا",
  "دریافت سفارش",
  "تحویل سفارش",
];

/**
 * Creates an array of tooltip elements.
 * @param {string} tagName - The tag name for each tooltip element.
 * @param {string} className - The class name for each tooltip element.
 * @param {string} text - The text content for each tooltip element.
 * @param {number} numOfTooltips - The number of tooltips to create.
 * @returns {Array<HTMLDivElement>} - An array containing the generated tooltip elements.
 */
// Function to create a tooltip with a specified number of tooltips and a common class
export default function createTooltip(tagName, className) {
  // Create an array to store the tooltips

  const tooltips = dataContentTooltip.map((content) => {
    const tooltip = domGenerator({
      tag: tagName,
      attributes: { class: className },
      dataAttributes: { data: "123456789" },
      properties: { textContent: content },
    });

    return {
      tag: tooltip,
    };
  });

  // Return the array of tooltips
  return tooltips;
}
