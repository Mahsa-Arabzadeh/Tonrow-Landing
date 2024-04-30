"use strict";
// modules:
import domGenerator from "dom-generator";
import { whyTonrowData } from "./data";
import checkValue from "./errorHandler";
import "./index.scss";

/**
 * Generates a DOM element representing a "Why Tonrow" card.
 * @param {Object} cardProps - The properties of the card.
 * @param {string} title - The title of the card.
 * @param {string} description - The description of the card.
 * @param {string} icon - The URL of the icon for the card.
 * @param {string} bgColor - The background color of the card.
 * @returns {HTMLElement} The generated DOM element representing the "Why Tonrow" card.
 */
function whyTonrowCardGenerator(cardProps) {
  const { title, description, icon, bgColor } = cardProps;

  const whyTonrow = domGenerator({
    tag: "div",
    attributes: { class: "why-tonrow-card" },
    children: [
      {
        tag: "div",
        attributes: { class: "why-tonrow-container-card" },
        children: [
          {
            tag: "h3",
            attributes: { class: "why-tonrow-title" },
            properties: { textContent: title },
          },
          {
            tag: "p",
            attributes: { class: "why-tonrow-desc" },
            properties: { textContent: description },
          },
        ],
      },
      {
        tag: "div",
        attributes: {
          class: "why-tonrow-div-icon",
          style: `background-color: ${bgColor}`,
        },
        children: [
          {
            tag: "img",
            attributes: {
              class: "why-tonrow-icon",
              src: icon,
            },
          },
        ],
      },
    ],
  });

  checkValue(cardProps);

  return whyTonrow;
}

/**
 * Function to generate the 'Why Tonrow' section.
 * @returns {HTMLElement} The generated section element.
 */
function whyTonrowGenerator() {
  const cardContainerConst = whyTonrowData.map((data) => {
    const { title, description, icon, bgColor } = data;
    const cards = whyTonrowCardGenerator({
      title,
      description,
      icon,
      bgColor,
    });

    return {
      tag: cards,
    };
  });

  const whyTonrowSection = domGenerator({
    tag: "div",
    attributes: { class: "why-tonrow-container" },
    children: [
      {
        tag: "h1",
        attributes: { class: "sec-title" },
        properties: { textContent: "چرا  تنرو  را  انتخاب  کنیم؟" },
      },
      {
        tag: "div",
        attributes: { class: "card-container" },
        children: cardContainerConst.map((data) => ({
          tag: data.tag,
        })),
      },
    ],
  });

  return whyTonrowSection;
}

export { whyTonrowGenerator };
