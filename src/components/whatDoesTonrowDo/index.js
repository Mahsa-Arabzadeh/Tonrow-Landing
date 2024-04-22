import domGenerator from "dom-generator";
import "./index.scss";

function generatorDOMWhatDoesTonrowDo() {
  let conteanerGeneratorWhatDoesTonrowDo = document.body.append(
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
          children: [
            {
                tag: "button",
                attributes: { class: "btn-head-SEC-whatDoesTonrowDo active-btn-header-what-services-tonrow" },
                properties: { textContent: "درخواست خرید" },
            },
            {
                tag: "button",
                attributes: { class: "btn-head-SEC-whatDoesTonrowDo" },
                properties: { textContent: "درخواست سفیر" },
            },
          ]
        },
      ],
    })
  );

  return conteanerGeneratorWhatDoesTonrowDo;
}
export default generatorDOMWhatDoesTonrowDo;
