"use strict";

import domGenerator from "dom-generator";

import baseButtonGenerator from "../buttonComponent/buttonComponent";

/**
 * Creates a blue card element with title, description, and optional button.
 * @param {string} title - The title of the blue card.
 * @param {string} description - The description of the blue card.
 * @param {string} [textButton] - The text content of the optional button.
 * @returns {HTMLDivElement} - The generated blue card element.
 */
function createBlueCard(title, description) {
  let blueCard = domGenerator({
    tag: "div",
    //* map: parent section of map
    attributes: { id: "blueCard" },
    children: [
      {
        tag: "div",
        attributes: { id: "overlay" },
      },
      {
        tag: "div",
        attributes: { id: "descriptionSellCard" },
        children: [
          {
            tag: "h1",
            //* imageMap: background section of map
            properties: { textContent: title },
          },
          {
            tag: "p",
            //* imageMap: background section of map
            properties: {
              textContent: description,
            },
          },
          {
            tag: baseButtonGenerator({
              content: "درخواست سفیر",
              size: "large",
              statues: "primaryFill",
              type: "button",
              className: "ambassador-request-btn",
            }),
          },
        ],
      },
    ],
  });

  return blueCard;
}
export default createBlueCard;
