// Import the baseButtonGenerator function from the buttonComponent module
import baseButtonGenerator from "../buttonComponent/buttonComponent";

// Import the buttonOptions object from the configButtonComponent module
import buttonOptions from "../buttonComponent/configButtonComponent";

// Import the domGenerator function from the dom-generator module
import domGenerator from "dom-generator";

// Import the sidebar function from the sidebar.js module
import sidebar from "../sideBar/sidebar";

// Import styles for the header component
import "./index.scss";

/**
 * Function to create the header component.
 * @param {Array} headerData - Data to populate the header component.
 * @returns {HTMLElement} - The created header element.
 */
export default function header(headerData) {
  // Create the header element
  const headerElement = domGenerator({
    tag: "header",
    attributes: { id: "header" },
    children: [
      {
        tag: "div",
        attributes: { class: "header-content" },
        children: [
          // Conditional rendering based on window width
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
                      href: headerData[0].imgLinkAddress,
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
                      .filter((item) => !item.btnText)
                      .map((item) => {
                        return {
                          tag: "a",
                          properties: {
                            textContent: item.linkText,
                            href: item.LinkAddress ?? "#",
                          },
                        };
                      }),
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
            children: headerData
              .filter((item) => item.btnText !== undefined)
              .map((item, index) => {
                // Copy buttonOptions object
                const buttonOptionsCopy = { ...buttonOptions };
                if (item.buttonStyles) {
                  // Apply styles from item.buttonStyles to buttonOptionsCopy
                  const { buttonStyles } = item;
                  Object.keys(buttonStyles).forEach((style) => {
                    buttonOptionsCopy[style] = buttonStyles[style];
                  });
                }
                // Generate button element using baseButtonGenerator
                return {
                  tag: baseButtonGenerator(buttonOptionsCopy),
                  properties: { textContent: item.btnText },
                  attributes: {
                    href: item.btnLink || "#", // Set the button href attribute
                    class: `btn-${index} ${item.public ? 'btn-public' : ''}`, // Add 'btn-public' class if 'public' property is true
                  },
                  children: item.btnImage
                    ? [
                        {
                          tag: "img",
                          attributes: {
                            src: item.btnImage,
                            alt: item.btnText,
                            class: "button-image", // Add a class for styling
                          },
                        },
                      ]
                    : [], // If no btnImage, leave children array empty
                  eventListeners: {
                    // Navigate to the specified link when the button is clicked
                    click: () => {
                      if (item.btnLink) {
                        window.location.href = item.btnLink;
                      }
                    },
                  },
                };
              }),
          },
        ],
      },
    ],
  });

  // If the window width is less than or equal to 900px, create the sidebar
  if (window.innerWidth <= 900) {
    sidebar(headerData);
  }

  return headerElement; // Return the created header element
}
