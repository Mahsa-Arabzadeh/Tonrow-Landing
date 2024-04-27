// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import domGenerator from "dom-generator";
import { brandData } from "./data";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.scss";

function swiperBrands() {
  const swiperElement = document.createElement("div");
  swiperElement.setAttribute("class", "swiper");

  let swiper = new Swiper(".swiper", {
    modules: [Navigation],
    slidesPerView: "auto",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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
            {
              tag: "div",
              attributes: { class: "swiper-btn-container" },
              children: [
                {
                  tag: "div",
                  attributes: { class: "swiper-button-prev" },
                },
              ],
            },
            {
              tag: "div",
              attributes: { class: "swiper-btn-container" },
              children: [
                {
                  tag: "div",
                  attributes: { class: "swiper-button-next" },
                },
              ],
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
 * @param {string} - hoveredSrc : The hovered source of images.
 * @returns {HTMLElement} - this function generate a dom element of brand icons.
 */
function brandIconGenerator(defaultSrc) {
  const brandGenerator = document.body.appendChild(
    domGenerator({
      tag: "img",
      attributes: { class: "swiper-slide", src: defaultSrc },
    })
  );

  return brandGenerator;
}

export default generateBrandTrust;
