"use strict";

import baseButtonGenerator from "../buttonComponent/buttonComponent";
import domGenerator from "dom-generator";
import sidebar from "../sideBar/sidebar";
import { getHeaderDataByRole } from "./validate";
import "./index.scss";

/**
 * Generates the header component based on the provided header data.
 *
 * @param {Array<Object>} headerData - Data to populate the header component.
 * @param {string} [defaultRole="public"] - Default role to determine header data if not provided.
 * @returns {HTMLElement} - The created header element.
 */
export default function header(headerData, defaultRole = "public") {
  // Retrieve header data based on the default role
  headerData = getHeaderDataByRole(defaultRole);

  // Generate the header element
  const headerElement = domGenerator({
    tag: "header",
    attributes: { id: "header" },
    dataAttributes: { font: "iranSans" },
    children: [
      {
        tag: "div",
        attributes: { class: "header-content" },
        children: [
          {
            // Container for logo and links
            tag: "div",
            attributes: { class: "logo-links-container" },
            children: [
              // Logo element
              {
                tag: "a",
                attributes: {
                  href: headerData[0].logoLink || "#",
                  class: "logo",
                },
                children: [
                  // Image for logo
                  {
                    tag: "img",
                    attributes: {
                      src: headerData[0].imgAddress,
                      alt: "Logo",
                    },
                  },
                ],
              },
              // Links
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
          },
          // Container for sidebar toggle icon
          {
            tag: "div",
            attributes: { class: "sidebar-toggle-icon" },
            children: [
              // Image for sidebar toggle
              {
                tag: "img",
                attributes: {
                  src: "./public/images/menu.png",
                  alt: "Open Sidebar",
                  class: "sidebar-icon",
                },
                eventListeners: {
                  // Event listener for sidebar toggle
                  click: () => {
                    const sidebarElement = document.getElementById("sidebar");
                    sidebarElement.classList.toggle("open");
                  },
                },
              },
            ],
          },
          // Container for buttons
          {
            tag: "div",
            attributes: { class: "buttons-container" },
            eventListeners: {
              // Event listener for button click
              click: () => {
                const buttonComponentWrapper = document.querySelector(
                  ".buttonComponentWrapper"
                );
                if (buttonComponentWrapper) {
                  const anchorLink =
                    buttonComponentWrapper.getAttribute("data-anchor-link");
                  if (anchorLink) {
                    window.location.href = anchorLink;
                  }
                }
              },
            },
          },
        ],
      },
    ],
  });

  // Render sidebar unconditionally
  sidebar(headerData);

  // Select buttons container
  const buttonsContainer = headerElement.querySelector(".buttons-container");
  // Clear existing buttons
  buttonsContainer.innerHTML = "";
  // Iterate through header data to create buttons
  headerData.forEach((item) => {
    if (item.type === "button") {
      const buttonElement = baseButtonGenerator({
        content: item.content || "",
        size: window.innerWidth > 900 ? item.size : "extraLarge", // Adjust size based on window width
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

  return headerElement; // Return the created header element
}
