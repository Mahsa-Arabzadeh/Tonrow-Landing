"use strict";

import domGenerator from "dom-generator";
import "./index.scss";
import "./responsive.scss";
import "../buttonComponent/buttonComponent.js";
import baseButtonGenerator from "../buttonComponent/buttonComponent.js";

let descriptionData = {
  heroTitle: "سامانه تنرو",
  textContent:
    "دریافت سریع خدمات حمل و نقل و انجام کار با ۵ سال سابقه کار با بزرگترین فروشگاه ها و سازمان های بوشهر",
};

let subcardDesktopData = {
  subcardTitle: "+۵ سال",
  subcardTextContent: "سابقه کار با بزرگترین شرکت های بوشهر",
};

let imagesSrc = {
  logoImage: "./public/images/heroBannerImages/Logotype.png",
  heroImage: "./public/images/heroBannerImages/hero.png",
  shadowImage: "./public/images/heroBannerImages/shadow.png",
  downArrowImage: "./public/images/heroBannerImages/arrow.svg",
  subcardImage: "./public/images/heroBannerImages/Subtract-mobile.png",
  subcardDesktopImage: "./public/images/heroBannerImages/Subtract-desktop.svg",
  subcardDesktopDownBtn: "./public/images/heroBannerImages/downBtn.png",
};

let shouldShowPublicButton = false;
/**
 *  This function causes the button to be displayed in the public type
 * @param {boolean} show - get true or false
 */
export function setPublicBtn(show) {
  // store switching between true and false for public and other type of user.
  shouldShowPublicButton = show;
}

/**
 * @returns - Creating the entire octet page dynamically with DOM generator
 * @function - cretor heroBannerSection
 */
export default function heroBannerSection() {
  return domGenerator(
    // start of hero section
    {
      tag: "section",
      attributes: { id: "hero-section" },
      children: [
        {
          tag: "div",
          attributes: { id: "herobBanner-Container" },
          children: [
            // start of hero banner (all image,icon,shasow in hero section)
            {
              tag: "div",
              attributes: { id: "hero-banner" },
              children: [
                // logo image
                {
                  tag: "img",
                  attributes: { class: "logo-image", src: imagesSrc.logoImage },
                },

                // hero image
                {
                  tag: "img",
                  attributes: { class: "hero-image", src: imagesSrc.heroImage },
                },

                // shadow image
                {
                  tag: "img",
                  attributes: {
                    class: "shadow-image",
                    src: imagesSrc.shadowImage,
                  },
                },

                // down arrow image
                {
                  tag: "img",
                  attributes: {
                    class: "downArrow-image",
                    src: imagesSrc.downArrowImage,
                  },
                },

                //  subcard image (mobile)
                {
                  tag: "img",
                  attributes: {
                    class: "subcard-image",
                    src: imagesSrc.subcardImage,
                  },
                },
              ],
            },
          ],
        },
        // end of hero banner (all image,icon,shasow in hero section)

        //  start of hero description
        {
          tag: "div",
          attributes: { id: "hero-description" },
          children: [
            {
              tag: "h1",
              attributes: { class: "hero-title" },
              properties: { textContent: descriptionData.heroTitle },
            },
            {
              tag: "span",
              attributes: { class: "hero-textContent" },
              properties: { textContent: descriptionData.textContent },
            },
            {
              ...(shouldShowPublicButton
                ? {
                  tag: baseButtonGenerator({
                    content: "ورود / ثبت نام",
                    size: "large",
                    statues: "primaryFill",
                    type: "button",
                    className: "enter-btn",
                    anchorLink: "#",
                    eventListeners: { click: () => { } },
                  }),
                }
                : {
                  tag: "div",
                }),
            },
          ],
        },

        {
          tag: "div",
          attributes: { class: "subcard-desktop-container" },
          children: [
            {
              tag: "img",
              attributes: {
                class: "subcard-image-desktop",
                src: imagesSrc.subcardDesktopImage,
              },
            },
            {
              tag: "div",
              attributes: { id: "desktop-subcardTexts" },

              children: [
                {
                  tag: "span",
                  attributes: { class: "subcard-title" },
                  properties: { textContent: subcardDesktopData.subcardTitle },
                },

                {
                  tag: "span",
                  attributes: { class: "subcard-textContent" },
                  properties: {
                    textContent: subcardDesktopData.subcardTextContent,
                  },
                },
              ],
            },

            {
              tag: "img",
              attributes: {
                class: "subcard-downBtn",
                src: imagesSrc.subcardDesktopDownBtn,
              },
              eventListeners: {
                click: () => {
                  const breakMotorElement = document.getElementById("breakMotor");
                  if (breakMotorElement) {
                    breakMotorElement.scrollIntoView({ behavior: "smooth" });
                  }
                }
              },
            },
          ],
        },
      ],
      // end of hero section children
    }
    // end of hero section
  );
}