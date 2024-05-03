"use strict";

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
  // append to the container of image items
  const brandImage = brandData.map((data) => {
    const imagesCard = brandIconGenerator(data.defaultSrc, data.hrefImage);

    return {
      tag: imagesCard,
    };
  });
  // Create swiper container
  const swiperContainer = domGenerator({
    tag: "div",
    attributes: { class: "swiper" },
    children: [
      {
        tag: "div",
        attributes: { class: "swiper-wrapper" },
        children: brandImage.map((img) => ({
          tag: img.tag,
        })),
      },
    ],
  });

  new Swiper(swiperContainer, {
    slidesPerView: "auto",
  });

  return swiperContainer;
}

/**
 * Function to generate the brand trust section.
 * @function generateBrandTrust
 * @returns {HTMLElement} - Create part of brand trust container.
 */
function generateBrandTrust() {
  const sectionBrandTrust = domGenerator({
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
      },
    ],
  });

  return sectionBrandTrust;
}

/**
 * @param {string} - defaultSrc : The default source of images.
 * @returns {HTMLElement} - this function generate a dom element of brand icons.
 */
function brandIconGenerator(defaultSrc, hrefImage) {
  try {
    // throwing an error that if the image source is not given to the function, do not show the image.
    if (!defaultSrc || !hrefImage) {
      throw new Error("No default source provided");
    }
    // brandGenerator images slide.
    const brandGenerator = domGenerator({
      tag: "img",
      attributes: {
        class: "swiper-slide",
        src: defaultSrc,
        href: `${hrefImage ?? "#"}`,
      },
    });

    return brandGenerator;
  } catch (error) {
    console.log(error);
  }
}

export default generateBrandTrust;
