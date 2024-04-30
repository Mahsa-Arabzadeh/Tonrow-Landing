import baseButtonGenerator from "../buttonComponent/buttonComponent";
import domGenerator from "dom-generator";
import sidebar from "../sideBar/sidebar";
import { getHeaderDataByRole } from "./validate";
import handleHeaderError from "./errorHandler";
import "./index.scss";

export default function header(headerData, defaultRole = "public") {
  headerData = getHeaderDataByRole(defaultRole);

  const headerElement = domGenerator({
    tag: "header",
    attributes: { id: "header" },
    children: [
      {
        tag: "div",
        attributes: { class: "header-content" },
        children: [
          window.innerWidth > 900
            ? {
                tag: "div",
                attributes: { class: "logo-links-container" },
                children: [
                  {
                    tag: "a",
                    attributes: {
                      href: headerData[0].logoLink || "#",
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
                    children: headerData
                      .slice(1)
                      .filter((item) => !item.content)
                      .map((item) => ({
                        tag: "a",
                        properties: {
                          textContent: item.linkText,
                          href: item.LinkAddress || "#",
                        },
                      })),
                  },
                ],
              }
            : {
                tag: "div",
                attributes: { class: "sidebar-toggle-icon" },
                children: [
                  {
                    tag: "img",
                    attributes: {
                      src: "./public/images/menu.png",
                      alt: "Open Sidebar",
                      class: "sidebar-icon",
                    },
                    eventListeners: {
                      click: () => {
                        const sidebarElement = document.getElementById("sidebar");
                        sidebarElement.classList.toggle("open");
                      },
                    },
                  },
                ],
              },
          {
            tag: "div",
            attributes: { class: "buttons-container" },
            eventListeners: {
              click: () => {
                const buttonComponentWrapper = document.querySelector('.buttonComponentWrapper');
                if (buttonComponentWrapper) {
                  const anchorLink = buttonComponentWrapper.getAttribute('data-anchor-link');
                  if (anchorLink) {
                    window.location.href = anchorLink;
                  }
                }
              }
            }
          },
        ],
      },
    ],
  });

  if (window.innerWidth <= 900) {
    sidebar(headerData);
  }

  const buttonsContainer = headerElement.querySelector('.buttons-container');
  buttonsContainer.innerHTML = '';
  headerData.forEach((item) => {
    if (item.type === "button") {
      const buttonElement = baseButtonGenerator({
        content: item.content || "",
        size: item.size,
        statues: item.statues,
        type: "button",
        class: item.class || "custom-class",
        anchorLink: item.anchorLink || "#",
        eventListeners: item.eventListeners || {},
        disabled: item.disabled || false,
        iconStart: item.iconStart,
      });
      buttonsContainer.appendChild(buttonElement);
    }
  });

  return headerElement;
}
