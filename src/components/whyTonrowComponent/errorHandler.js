"use strict";

/**
 * Checks if the properties of a card object are valid.
 * @param {string} title - The title of the card.
 * @param {string} description - The description of the card.
 * @param {string} icon - The URL of the icon for the card.
 * @param {string} bgColor - The background color of the card.
 * @param {object} cardProps - The properties
 * @throws {Error} Throws an error if any property is null or if any required property is missing.
 */
function checkValue(cardProps) {
  const { title, description, icon, bgColor } = cardProps;

  try {
    // If the values ​​of whyTonrowData were null or invalid, it should throw this error
    for (let key in cardProps) {
      if (cardProps[key] === null) {
        throw new Error("All properties are null!");
      }
    }
    if (!title || !description || !icon || !bgColor) {
      throw new Error(
        "Invalid card properties: title, description, icon, or bgColor is missing."
      );
    }
  } catch (error) {
    // catch errors:
    console.log(error.message);
  }
}

export default checkValue;
