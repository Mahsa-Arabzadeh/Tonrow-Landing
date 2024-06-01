"use strict";

import domGenerator from "dom-generator";
import contactItemsData from "./data";
import "./index.scss";

/**
 * Generates the contact section HTML structure.
 * @returns {HTMLElement} The contact section HTML element.
 */
export default function contactUs() {
  /**
   * Represents an individual contact item.
   * @property {string} tag : The HTML tag name.
   * @property {Object} attributes : The attributes of the HTML tag.
   */
  try {
    for (const item of contactItemsData) {
      if (
        !item.hasOwnProperty("imageContact") ||
        !item.hasOwnProperty("hrefImg")
      ) {
        throw Error("invalid data of contact");
      }
    }
    const contactItem = contactItemsData.map((img) => {
      return {
        tag: "a",
        attributes: { href: `${img.hrefImg ?? "#"}` },
        children: {
          tag: "img",
          attributes: {
            class: "contact-img",
            src: `${img.imageContact ?? "/images/forbiddendefaultImage.svg"}`,
          },
        },
      };
    });

    return domGenerator({
      tag: "div",
      attributes: { class: "contactus-section" },
      children: [
        {
          tag: "h2",
          attributes: { class: "contact-title" },
          properties: { textContent: "راه های ارتباط با ما " },
        },
        {
          tag: "div",
          attributes: { class: "contact-items" },
          children: contactItem,
        },
      ],
    });
  } catch (error) {
    throw new Error(error);
  }
}
