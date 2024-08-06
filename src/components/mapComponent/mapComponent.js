"use strict";

import domGenerator from "dom-generator";

import createTooltip from "./tooltipGenerator";
import createBlueCard from "./blueCard";

/**
 * Creates a map section with tooltips.
 * This component is for making the map part. This section has a background-image on which there is a card and an engine.
 * @returns {HTMLDivElement} - The generated map section element.
 */

export default function createMap() {
  // start domGenerator
  return domGenerator({
    tag: "div",
    //* imageMap: background section of map
    attributes: { id: "mapSection" },
    children: [
      {
        tag: "img",
        attributes: {
          src: "./public/images/group.png",
          class: "motorDelivery",
        },
      },
      //* catch array tooltips
      // ...tooltips,
      ...createTooltip("div", "tooltips"),

      //* card: cardBlue of map background section
      {
        tag: createBlueCard(
          " همین حالا خرید کن",
          "وظایف سفیران شامل جمع‌آوری سفارشات، تحویل به موقع، ارتباط مؤثر با مشتریان و حفظ کیفیت خدمات است."
        ),
      },
    ],
  });
}
