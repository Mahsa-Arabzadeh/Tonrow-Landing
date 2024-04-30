"use strict";

/**
 * Imports the header component function from the headerComponent module.
 * @param {Array} headerData - Data to populate the header component.
 * @returns {void}
 */
import header from "./headerComponent"; // Corrected import path

/**
 * Function to handle errors related to header data.
 * @param {Array} headerData - Data to populate the header component.
 * @returns {void}
 */
export default function handleHeaderError(headerData) {
  if (!headerData.length) {
    // Log an error message if headerData array is empty
    console.error("headerData array is empty");
  } else {
    // Render the header if data is available
    header(headerData);
  }
}
