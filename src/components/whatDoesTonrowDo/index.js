import domGenerator from "dom-generator";
import "./index.scss";

const contentWhatDoesTonrowDo = [
  {
    headeText: "درخواست خرید",
    imgUrl: "public/images/thumbnail-headertext.png",
    titleBody: "ارسال لیست خرید",
    Paragraph:
      "میتوانید برای سازمان یا منزل شخصی خود فقط با مشخص کردن مبدا و مقصد و ارسال لیست های خرید خود, کارها را با سرعت بیشتری انجام دهید و برای دیگر کار هایتان زمانبخرید.   ",
    btnText: "درخواست خرید",
  },
  {
    headeText: "درخواست سفیر",
    imgUrl: "public/images/thumbnail-headertext1.png",
    titleBody: "درخواست سفیر",
    Paragraph:
      "فقط کارهای خود را مشخص کنید تا سفیران ما کارها را انجام دهند و دیگر وقت کم نیارید.",
    btnText: "درخواست سفیر",
  },
];

/**
 * @returns {array} - create header and pas to dom-genretore
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
 * @returns {} - for swuche body in mobile
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
 * @returns {object} - for creating body
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
 * @returns {} - create all DOM  
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
