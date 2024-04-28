import domGenerator from "dom-generator";
import { whayTonrowData } from "./data";
import "./index.scss";

/**
 * Generates a DOM element representing a "Why Tonrow" card.
 * @param {string} title - The title of the card.
 * @param {string} description - The description of the card.
 * @param {string} icon - The URL of the icon for the card.
 * @param {string} bgColor - The background color of the card.
 * @returns {HTMLElement} The generated DOM element representing the "Why Tonrow" card.
 */
function whyTonrowCardGenerator(title, description, icon, bgColor) {
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

  return whyTonrow;
}

/**
 * Function to generate the 'Why Tonrow' section.
 * @returns {HTMLElement} The generated section element.
 */
function whyTonrowGenerator() {
  // i'll refactor this.---------------------------
  const section = document.createElement("section");
  const secTitle = document.createElement("div");
  const cardContainer = document.createElement("div");
  section.appendChild(secTitle);
  section.appendChild(cardContainer);
  secTitle.textContent = "چرا  تنرو  را  انتخاب  کنیم؟";
  section.setAttribute("class", "section-why");
  secTitle.setAttribute("class", "sec-title");
  cardContainer.setAttribute("class", "card-container");
  // i'll refactor this.---------------------------

  //Append cards to the cardContainer to see the cards.
  const generateCard = whayTonrowData.forEach((data) => {
    cardContainer.appendChild(
      whyTonrowCardGenerator(
        data.title,
        data.description,
        data.icon,
        data.bgColor
      )
    );
  });

  return whyTonrowSection;
}

export { whyTonrowGenerator };
