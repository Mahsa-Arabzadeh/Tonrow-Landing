"use strict";

/**
 * Checks if the properties of header data are valid.
 * @param {Array} headerData - Data to populate the header component.
 * @throws {Error} Throws an error if headerData array is empty.
 */
export default function checkHeaderData(headerData) {
  try {
    if (!headerData.length) {
      throw new Error("headerData array is empty");
    } else {
      // Render the header if data is available
      header(headerData);
    }
  } catch (error) {
    // catch errors:
    console.error(error.message);
  }
}

// Imports the header component function from the headerComponent module.
import header from "./headerComponent"; // Corrected import path
