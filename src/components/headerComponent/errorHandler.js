"use strict";

// Imports the header component function from the headerComponent module.
import header from "./headerComponent"; 

/**
 * Checks if the properties of header data are valid.
 * @param {Array} headerData - Data to populate the header component.
 * @throws {Error} Throws an error if headerData array is empty.
 */
export default function checkHeaderData(headerData) {
  try {
    if (!Array.isArray(headerData)) {
      throw new Error("headerData is not an array");
    }

    if (headerData.length === 0) {
      throw new Error("headerData array is empty");
    }

    // Render the header if data is available
    header(headerData);
  } catch (error) {
    // Log the entire error object for better debugging
    console.error("An error occurred:", error);

    // Rethrow the error to propagate it
    throw error;
  }
}
