// core version + navigation, pagination modules:
import Swiper from "swiper";
// Import domGenerator for creating DOM Elements.
import domGenerator from "dom-generator";
import { brandData } from "./data";
// import Swiper and modules styles
import "swiper/css";
import "./index.scss";

/**
 * Creates a swiper element for displaying brands.
 * @function swiperBrands
 * @returns {HTMLElement} - The swiper element
 */
function swiperBrands() {
  const swiperElement = document.createElement("div");
  swiperElement.setAttribute("class", "swiper");

  let swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
  });

  return swiperElement;
}

/**
 * Function to generate the brand trust section.
 * @function generateBrandTrust
 * @returns {HTMLElement} - Create part of brand trust container.
 */
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
          tag: swiperBrands(),
          children: [
            {
              tag: "div",
              attributes: { class: "swiper-wrapper" },
            },
          ],
        },
      ],
    })
  );
  swiperBrands();

  const brandContainer = document.querySelector(".swiper-wrapper");
  // append to the container of image items
  brandData.forEach((data) => {
    brandContainer.appendChild(brandIconGenerator(data.defaultSrc));
  });

  return sectionBrandTrust;
}

/**
 * @param {string} - defaultSrc : The default source of images.
 * @returns {HTMLElement} - this function generate a dom element of brand icons.
 */
function brandIconGenerator(defaultSrc) {
  const brandGenerator = domGenerator({
    tag: "img",
    attributes: { class: "swiper-slide", src: defaultSrc },
  });

  return brandGenerator;
}

export default generateBrandTrust;
