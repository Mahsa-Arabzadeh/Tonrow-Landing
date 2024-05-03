"use strict";

import domGenerator from "dom-generator";
import "./index.scss";
import { contentWhatDoesTonrowDo } from "./data";
import baseButtonGenerator from "../buttonComponent/buttonComponent";

/**
 * @returns {array} - create heade SEC WhatDoesTonrowDo and pas to dom-genretore
 */
function generatorHeadWhatDoesTonrowDo() {
  let contentHeadWhatDoesTonrowDoArray = [];

  contentWhatDoesTonrowDo.forEach((element, index) => {
    let contentHeadWhatDoesTonrowDo = {
      tag: "button",
      attributes: {
        class: `btn-head-SEC-whatDoesTonrowDo ${
          index === 1 ? "active-btn-header-what-services-tonrow" : ""
        }`,
      },
      properties: { textContent: element.headeText },

      eventListeners: { click: () => clickChangeBody(index) },
    };
    contentHeadWhatDoesTonrowDoArray.push(contentHeadWhatDoesTonrowDo);
  });

  return contentHeadWhatDoesTonrowDoArray;
}
/**
 * @returns {void} - for swuche body SEC WhatDoesTonrowDo in mobile
 * @param {index} - to find it
 */
function clickChangeBody(index) {
  let btns = document.querySelectorAll("button");
  btns.forEach((btn) => {
    btn.classList.remove("active-btn-header-what-services-tonrow");
  });
  document
    .querySelector(`.btn-head-SEC-whatDoesTonrowDo:nth-of-type(${index + 1})`)
    .classList.add("active-btn-header-what-services-tonrow");

  let bodyItmswhatDoesTonrowDo = document.querySelectorAll(
    ".body-what-services-tonrow"
  );
  bodyItmswhatDoesTonrowDo.forEach((element) => {
    element.style.display = "none";
  });
  document.querySelector(
    `.body-what-services-tonrow:nth-of-type(${index + 2})`
  ).style.display = "flex";
}
/**
 * @returns {object} - for creating body SEC WhatDoesTonrowDo
 */
function generatorBodyWhatDoesTonrowDo() {
  const contentBodyWhatDoesTonrowDoArray = contentWhatDoesTonrowDo.map(
    (element) => {
      return {
        tag: "div",
        attributes: { class: "body-what-services-tonrow" },
        children: [
          {
            tag: "img",
            attributes: { src: element.imgUrl },
          },
          {
            tag: "div",
            attributes: { class: "description-body-SEC-whatDoesTonrowDo" },
            children: [
              {
                tag: "h2",
                properties: { textContent: element.titleBody },
              },
              {
                tag: "p",
                properties: { textContent: element.Paragraph },
              },
              {
                tag: baseButtonGenerator({
                  content: element.btnText,
                  size: "small",
                  statues: "primaryOutLine",
                  type: "button",
                  class: "botton-tonrow-do",
                  anchorLink: "#",
                  eventListeners: {},
                  iconStart: "/images/arrow-left.svg",
                }),
              },
            ],
          },
        ],
      };
    }
  );

  return contentBodyWhatDoesTonrowDoArray;
}
/**
 * @returns {void} - create all DOM  SEC WhatDoesTonrowDo
 */
function generatorDOMWhatDoesTonrowDo() {
  const bodySections = generatorBodyWhatDoesTonrowDo();
  const containerGeneratorWhatDoesTonrowDo = domGenerator({
    tag: "section",
    attributes: { class: "what-services-tonrow" },
    children: [
      {
        tag: "h1",
        attributes: { class: "sec-title" },
        properties: { textContent: "تــنــرو، چه خدماتی ارائه میدهد؟" },
      },
      {
        tag: "div",
        attributes: { class: "header-what-services-tonrow " },
        children: generatorHeadWhatDoesTonrowDo(),
      },
      ...bodySections,
    ],
  });

  return containerGeneratorWhatDoesTonrowDo;
}

export default generatorDOMWhatDoesTonrowDo;
