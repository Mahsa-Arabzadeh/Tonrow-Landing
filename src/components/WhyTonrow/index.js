import domGenerator from "/dom-generator";
import { section } from "../../JS/constants/constants";

/**
 * Generates a DOM element representing a "Why Tonrow" card.
 * @param {Array} props - An array containing title, description, and icon.
 * @returns {HTMLElement} The generated DOM element representing the "Why Tonrow" card.
 */

export function whyTonrowGenerator(title, description, icon) {
  const whyTonrow = document.body.appendChild(
    domGenerator({
      tag: "div",
      attributes: { class: "why-tonrow-card" },
      children: [
        {
          tag: "img",
          attributes: { class: "why-tonrow-icon", src: icon },
        },
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
      ],
    })
  );

  return whyTonrow;
}
