import domGenerator from "dom-generator";
import "./index.scss";

// const whayTonrowData = [
//   {
//     title: "به صرفه",
//     description: "ارزان ترین فروشگاه های ممکن نزدیک به شما ",
//     icon: "",
//   },
//   {
//     title: "همیشه در دسترس",
//     description: "پشتیبانی 24 ساعته همکاران ما در تنرو",
//     icon: "",
//   },
// ];

whayTonrowData.forEach((data) => {
  document.body.appendChild(
    whyTonrowGenerator(data.title, data.description, data.icon)
  );
});

/**
 * Generates a DOM element representing a "Why Tonrow" card.
 * @param {Array} props - An array containing title, description, and icon.
 * @returns {HTMLElement} The generated DOM element representing the "Why Tonrow" card.
 */

export function whyTonrowGenerator(title, description, icon) {
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
        tag: "img",
        attributes: { class: "why-tonrow-icon", src: icon },
      },
    ],
  });

  return whyTonrow;
}
