import domGenerator from "dom-generator";
import { brandData } from "./data";
import "./index.scss";

function generateBrandTrust() {
  const sectionBrandTrust = document.body.appendChild(
    domGenerator({
      tag: "section",
      attributes: { class: "section-brand" },
      children: [
        {
          tag: "h1",
          attributes: { class: "sec-title" },
          properties: { textContent: "چه برند هایی به ما اعتماد کردند؟" },
        },
        {
          tag: "div",
          attributes: { class: "brand-container" },
        },
      ],
    })
  );

  const brandContainer = document.querySelector(".brand-container");
  // append to the container of image items
  brandData.forEach((data) => {
    brandContainer.appendChild(
      brandIconGenerator(data.defaultSrc, data.hoveredSrc)
    );
  });

  return sectionBrandTrust;
}

/**
 * @param {string} - defaultSrc : The default source of images.
 * @param {string} - hoveredSrc : The hovered source of images.
 * @returns {HTMLElement} - this function generate a dom element of brand icons.
 */
export function brandIconGenerator(defaultSrc, hoveredSrc) {
  const brandGenerator = document.body.appendChild(
    domGenerator({
      tag: "img",
      attributes: { class: "brand-icon", src: defaultSrc },
      eventListeners: {
        mouseover: (e) => {
          const mouseOver = e.target.setAttribute("src", hoveredSrc);
        },
        mouseout: (e) => {
          const mouseOut = e.target.setAttribute("src", defaultSrc);
        },
      },
    })
  );

  return brandGenerator;
}

export default generateBrandTrust;
