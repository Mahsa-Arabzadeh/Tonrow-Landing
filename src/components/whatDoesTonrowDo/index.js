import domGenerator from "dom-generator";
import "./index.scss";

const contentWhatDoesTonrowDo = [
    {
        headeText: "درخواست خرید",
        imgUrl: "public/images/thumbnail-headertext.png",
        titleBody: "ارسال لیست خرید",
        pText:
            "میتوانید برای سازمان یا منزل شخصی خود فقط با مشخص کردن مبدا و مقصد و ارسال لیست های خرید خود, کارها را با سرعت بیشتری انجام دهید و برای دیگر کار هایتان زمانبخرید.   ",
        btnText: "درخواست خرید",
    },
    {
        headeText: "درخواست سفیر",
        imgUrl: "public/images/thumbnail-headertext1.png",
        titleBody: "درخواست سفیر",
        pText: "فقط کارهای خود را مشخص کنید تا سفیران ما کارها را انجام دهند و دیگر وقت کم نیارید.",
        btnText: "درخواست سفیر",
    },
    {
        headeText: "درخواست سفیر",
        imgUrl: "public/images/thumbnail-headertext1.png",
        titleBody: "درخواست سفیر",
        pText: "فقط کارهای خود را مشخص کنید تا سفیران ما کارها را انجام دهند و دیگر وقت کم نیارید.",
        btnText: "درخواست سفیر",
    },
];

function generatorHeadWhatDoesTonrowDo() {
    let contentHeadWhatDoesTonrowDoArray = [];

    contentWhatDoesTonrowDo.forEach((element, number) => {
        let contentHeadWhatDoesTonrowDo = {
            tag: "button",
            attributes: {
                class: "btn-head-SEC-whatDoesTonrowDo",
            },
            properties: { textContent: element.headeText },
            eventListeners: {
                click: () =>
                document.querySelector("*").classList.remove("active-btn-header-what-services-tonrow"),
            },
            eventListeners: {
                click: () =>
                    document.querySelector(`.btn-head-SEC-whatDoesTonrowDo:nth-of-type(${number + 1})`).classList.add("active-btn-header-what-services-tonrow"),
            },
        };
        contentHeadWhatDoesTonrowDoArray.push(contentHeadWhatDoesTonrowDo);
    });

    return contentHeadWhatDoesTonrowDoArray;
}
function generatorBodyWhatDoesTonrowDo() {
    let contentbodyWhatDoesTonrowDoObject;
    contentWhatDoesTonrowDo.forEach((element) => {
        contentbodyWhatDoesTonrowDoObject = {
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
                            properties: { textContent: element.pText },
                        },
                        {
                            tag: "button",
                            properties: { textContent: element.btnText },
                        },
                    ],
                },
            ],
        };

    });

    return contentbodyWhatDoesTonrowDoObject
}


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
                    children: generatorHeadWhatDoesTonrowDo(),
                },
                generatorBodyWhatDoesTonrowDo(),
            ],
        })
    );

    return conteanerGeneratorWhatDoesTonrowDo;
}
export default generatorDOMWhatDoesTonrowDo;
