import baseButtonGenerator from "../buttonComponent/buttonComponent";
import domGenerator from "dom-generator";
import sidebar from "../sideBar/sidebar";
import { getHeaderDataByRole } from "./validate";
import handleHeaderError from "./errorHandler";

/**
 * Creates a header component dynamically based on provided data.
 * 
 * @param {Array} headerData - An array containing data to populate the header component.
 *                             Should include information such as logo link, image address, 
 *                             link addresses, and button configurations.
 * @returns {HTMLElement} - The HTML header element generated with the provided data.
 */
export default function header() {
  // Retrieve header data based on user role
  const defaultRole = "public";
  const headerData = getHeaderDataByRole(defaultRole);

  // Dynamically generates the header element with appropriate content and functionality
  
  // Create the header element
  const headerElement = document.body.appendChild(
    domGenerator({
      tag: "header",
      attributes: { id: "header" },
      children: [
        {
          tag: "div",
          attributes: { class: "header-content" },
          children: [
            // Conditionally render logo and links container based on window width
            window.innerWidth > 900
              ? {
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
                }
              : {
                  // Container for sidebar toggle icon
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
                          sidebarElement.style.display =
                            sidebarElement.style.display === "none"
                              ? "inline-block"
                              : "none";
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
                click: () => {
                  // Redirects to the specified anchor link on button click
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
    })
  );

  // If the window width is less than or equal to 900px, create the sidebar
  if (window.innerWidth <= 900) {
    sidebar(headerData);
  }

  // Container for buttons
  const buttonsContainer = headerElement.querySelector('.buttons-container');

  // Clear existing buttons
  buttonsContainer.innerHTML = '';

  // Add buttons from headerData
  headerData.forEach((item) => {
    if (item.type === "button") {
      // Generates buttons dynamically based on provided data
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

  return headerElement; // Returns the generated header element
}


const headerData = getHeaderDataByRole(defaultRole);
handleHeaderError(headerData);
