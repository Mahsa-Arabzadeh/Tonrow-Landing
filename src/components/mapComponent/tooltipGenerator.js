"use strict";

import domGenerator from "dom-generator";

/**
 * Creates an array of tooltip elements.
 * @param {string} tagName - The tag name for each tooltip element.
 * @param {string} className - The class name for each tooltip element.
 * @param {string} text - The text content for each tooltip element.
 * @param {number} numOfTooltips - The number of tooltips to create.
 * @returns {Array<HTMLDivElement>} - An array containing the generated tooltip elements.
 */
// Function to create a tooltip with a specified number of tooltips and a common class
function createTooltip(tagName, className, text, numOfTooltips) {
  // Create an array to store the tooltips
  const tooltips = [];

  // Loop through the specified number of tooltips
  for (let i = 0; i < numOfTooltips; i++) {
    // Create a new tooltip
    const tooltip = domGenerator({
      tag: tagName,
      attributes: { class: className },
      dataAttributes: { data: "123456789" },
      properties: { textContent: text },
    });

    // Add the tooltip to the array
    tooltips.push(tooltip);
  }

  // Return the array of tooltips
  return tooltips;
}

export default createTooltip;
