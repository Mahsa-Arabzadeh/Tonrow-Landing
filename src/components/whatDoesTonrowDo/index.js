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
              attributes: {
                class:
                  "btn-head-SEC-whatDoesTonrowDo active-btn-header-what-services-tonrow",
              },
              properties: { textContent: "درخواست خرید" },
            },
            {
              tag: "button",
              attributes: { class: "btn-head-SEC-whatDoesTonrowDo" },
              properties: { textContent: "درخواست سفیر" },
            },
          ],
        },


        {
          tag: "div",
          attributes: { class: "body-what-services-tonrow" },
          children: [
            {
              tag: "img",
              attributes: { src: "public/images/thumbnail-headertext.png" },
            },

            {
              tag: "div",
              attributes: { class: "description-body-SEC-whatDoesTonrowDo" },
              children: [
                {
                    tag:"h2",
                    properties: { textContent: "ارسال لیست خرید" },
                },
                {
                    tag:"p",
                    properties: { textContent: "میتوانید برای سازمان یا منزل شخصی خود فقط با مشخص کردن مبدا و مقصد و ارسال لیست های خرید خود, کارها را با سرعت بیشتری انجام دهید و برای دیگر کار هایتان زمانبخرید." },
                },
                {
                    tag:"button",
                    properties: { textContent:"درخواست خرید"},
                },
              ],
            },
          ],
        },

        {
          tag: "div",
          attributes: { class: "body-what-services-tonrow" },
          children: [
            {
              tag: "img",
              attributes: { src: "public/images/thumbnail-headertext.png" },
            },

            {
              tag: "div",
              attributes: { class: "description-body-SEC-whatDoesTonrowDo" },
              children: [
                {
                    tag:"h2",
                    properties: { textContent: "ارسال لیست خرید" },
                },
                {
                    tag:"p",
                    properties: { textContent: "میتوانید برای سازمان یا منزل شخصی خود فقط با مشخص کردن مبدا و مقصد و ارسال لیست های خرید خود, کارها را با سرعت بیشتری انجام دهید و برای دیگر کار هایتان زمانبخرید." },
                },
                {
                    tag:"button",
                    properties: { textContent:"درخواست خرید"},
                },
              ],
            },
          ],
        },
      ],
    })
  );

  return conteanerGeneratorWhatDoesTonrowDo;
}
export default generatorDOMWhatDoesTonrowDo;
