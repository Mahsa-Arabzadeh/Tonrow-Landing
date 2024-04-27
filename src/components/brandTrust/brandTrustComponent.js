// core version module:
import Swiper from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import domGenerator from "dom-generator";
import { brandData } from "./data";
import "./index.scss";

export function swiperBrands() {
  const swiperElement = document.createElement("div");
  swiperElement.setAttribute("class", "swiper");

  let swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    centeredSlides: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  return swiperElement;
}

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

  const brandContainer = document.querySelector(".swiper-wrapper");
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
      attributes: { class: "swiper-slide", src: defaultSrc },
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

  swiperBrands();

  return brandGenerator;
}

export default generateBrandTrust;
