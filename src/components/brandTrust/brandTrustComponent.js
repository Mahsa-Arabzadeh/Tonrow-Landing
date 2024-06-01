"use strict";

// core version + navigation, pagination modules:
import Swiper, { Mousewheel } from "swiper";
// Import domGenerator for creating DOM Elements.
import domGenerator from "dom-generator";
import { brandData } from "./data";
// import Swiper and modules styles
import "swiper/css";
import "./index.scss";

// Use Swiper modules
Swiper.use([Mousewheel]);
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
    attributes: { class: "mySwiper swiper" },
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
    mousewheel: true,
    // direction: "vertical",
  });

  return swiperContainer;
}

/**
 * Function to generate the brand trust section.
 * @function generateBrandTrust
 * @returns {HTMLElement} - Create part of brand trust container.
 */
export default function generateBrandTrust() {
  return domGenerator({
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
}

/**
 * @param {string} - defaultSrc : The default source of images.
 * @returns {HTMLElement} - this function generate a dom element of brand icons.
 */
function brandIconGenerator(defaultSrc, hrefImage) {
  try {
    // throwing an error that if the image source is not given to the function, do not show the image.
    for (const item of brandData) {
      if (
        !item.hasOwnProperty("defaultSrc") ||
        !item.hasOwnProperty("hrefImage")
      ) {
        throw new Error("No default source provided");
      }
    }

    // brandGenerator images slide.
    return domGenerator({
      tag: "a",
      attributes: { class: "swiper-slide", href: `${hrefImage ?? "#"}` },
      children: [
        {
          tag: "img",
          attributes: {
            src: `${defaultSrc ?? "/images/defaultImage.png"}`,
          },
        },
      ],
    });
  } catch (error) {
    throw new Error(error);
  }
}
