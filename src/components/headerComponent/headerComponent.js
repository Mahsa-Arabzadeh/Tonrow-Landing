import domGenerator from "dom-generator";
import "./index.scss";
import { safirHeaderData, adminHeaderData, userHeaderData, publicHeaderData } from "./data.js";

export default function header(headerData) {
  const headerGenerator = document.body.appendChild(
    domGenerator({
      tag: "header",
      attributes: { id: "header" },
      children: [
        {
          tag: "div",
          attributes: { class: "header-content" },
          children: [
            {
              tag: "button",
              dataAttributes: { id: "register" },
              properties: { textContent: headerData[0].btnText },
              eventListeners: {
                click: () => {},
              },
            },
            {
              tag: "div",
              attributes: { class: "flex-container" },
              children: [
                {
                  tag: "nav",
                  children: [
                    {
                      tag: "ul",
                      children: headerData.map((item) => ({
                        tag: "li",
                        children: [
                          {
                            tag: "a",
                            properties: { textContent: item.linkText },
                            attributes: { href: item.LinkAddress },
                          },
                        ],
                      })),
                    },
                  ],
                },
                {
                  tag: "a",
                  attributes: {
                    href: headerData[0].imgLinkAddress,
                    class: "logo",
                  },
                  children: [
                    {
                      tag: "img",
                      attributes: {
                        src: headerData[0].imgAddress,
                        alt: "Logo",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    })
  );

  return headerGenerator;
}
