// headerComponent.js
import domGenerator from "dom-generator";
import "./index.scss";

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
              tag: "div", // Wrap logo and links in a div
              attributes: { class: "logo-links-container" },
              children: [
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
                {
                  tag: "div",
                  attributes: { class: "logo-links" },
                  children: headerData.slice(1).filter(item => !item.btnText).map(item => {
                    return {
                      tag: "a",
                      properties: {
                        textContent: item.linkText,
                      },
                      attributes: {
                        href: item.LinkAddress || "#",
                      },
                    };
                  }),
                },
              ],
            },
            {
              tag: "div",
              attributes: { class: "buttons-container" },
              children: headerData.filter(item => item.btnText !== undefined).map(item => {
                return {
                  tag: "button",
                  properties: { textContent: item.btnText },
                  eventListeners: {
                    click: () => {
                      // Add button click functionality if needed
                    },
                  },
                };
              }),
            },
          ],
        },
      ],
    })
  );

  return headerGenerator;
}
