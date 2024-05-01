import domGenerator from "dom-generator";
import "./index.scss";
import { contentWhatDoesTonrowDo } from "./data";

/**
 * @returns {array} - create heade SEC WhatDoesTonrowDo and pas to dom-genretore
 */
function generatorHeadWhatDoesTonrowDo() {
  let contentHeadWhatDoesTonrowDoArray = [];

  contentWhatDoesTonrowDo.forEach((element, number) => {
    let contentHeadWhatDoesTonrowDo = {
      tag: "button",
      attributes: {
        class: "btn-head-SEC-whatDoesTonrowDo",
      },
      properties: { textContent: element.headeText },

      eventListeners: { click: () => clickChangeBody(number) },
    };
    contentHeadWhatDoesTonrowDoArray.push(contentHeadWhatDoesTonrowDo);
  });

  return contentHeadWhatDoesTonrowDoArray;
}
/**
 * @returns {} - for swuche body SEC WhatDoesTonrowDo in mobile
 * @param {number} - to find it
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
                tag: "button",
                properties: { textContent: element.btnText },
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
 * @returns {} - create all DOM  SEC WhatDoesTonrowDo
 */
function generatorDOMWhatDoesTonrowDo() {
  const bodySections = generatorBodyWhatDoesTonrowDo();
  const containerGeneratorWhatDoesTonrowDo = document.body.append(
    domGenerator({
      tag: "section",
      attributes: { class: "what-services-tonrow" },
      children: [
        {
          tag: "h1",
          properties: { textContent: "تــنــرو، چه خدماتی ارائه میدهد؟" },
        },
        {
          tag: "div",
          attributes: { class: "header-what-services-tonrow " },
          children: generatorHeadWhatDoesTonrowDo(),
        },
        ...bodySections,
      ],
    })
  );

  return containerGeneratorWhatDoesTonrowDo;
}

export default generatorDOMWhatDoesTonrowDo;
