import domGenerator from "dom-generator";
import "./index.scss";

// Data array containing information for "Why Tonrow" cards.
export const whayTonrowData = [
  {
    title: "همیشه در دسترس",
    description: "پشتیبانی 24 ساعته همکاران ما در تنرو",
    icon: "../../public/images/call-calling.svg",
    bgColor: "purple",
  },
  {
    title: "به صرفه",
    description: "ارزان ترین فروشگاه های ممکن نزدیک به شما ",
    icon: "../../../public/images/shopping-cart.svg",
    bgColor: "pink",
  },
  {
    title: "حداکثر سرعت",
    description: "تحویل کالا در کم ترین زمان ممکن برای شما ",
    icon: "../../public/images/empty-wallet-change.svg",
    bgColor: "hotpink",
  },
  {
    title: "کیفیت بالا",
    description: "بهترین کیفیت ممکن که فکرش هم می کنید. ",
    icon: "../../public/images/shield-tick.svg",
    bgColor: "blue",
  },
];

/**
 * Generates a DOM element representing a "Why Tonrow" card.
 * @param {string} title - The title of the card.
 * @param {string} description - The description of the card.
 * @param {string} icon - The URL of the icon for the card.
 * @param {string} bgColor - The background color of the card.
 * @returns {HTMLElement} The generated DOM element representing the "Why Tonrow" card.
 */
export function whyTonrowCardGenerator(title, description, icon, bgColor) {
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
