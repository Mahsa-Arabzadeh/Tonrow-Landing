import baseButtonGenerator from "../buttonComponent/buttonComponent";
import buttonOptions from "../buttonComponent/configButtonComponent";

// Import domGenerator function
import domGenerator from "dom-generator";

// Import sidebar function from sidebar.js
import sidebar from "../sideBar/sidebar";

// Import styles
import "./index.scss";

// Function to create the header component
export default function header(headerData) {
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
            // Conditional rendering based on window width
            window.innerWidth > 900
              ? {
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
                            },
                            attributes: {
                              href: item.LinkAddress ?? "#",
                            },
                          };
                        }),
                    },
                  ],
                }
              : {
                  tag: "div",
                  attributes: { class: "sidebar-toggle-icon" },
                  children: [
                    // Add image for sidebar toggle
                    {
                      tag: "img",
                      attributes: {
                        src: "./public/images/menu.png", // Replace with the path to your sidebar icon
                        alt: "Open Sidebar",
                        class: "sidebar-icon",
                      },
                      eventListeners: {
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
            // Buttons container
            {
              tag: "div",
              attributes: { class: "buttons-container" },
              children: headerData
                .filter((item) => item.btnText !== undefined)
                .map((item) => {
                  const buttonOptionsCopy = { ...buttonOptions }; // Make a copy of buttonOptions object
                  if (item.buttonStyles) {
                    // If buttonStyles property exists, apply styles
                    const { buttonStyles } = item;
                    Object.keys(buttonStyles).forEach((style) => {
                      buttonOptionsCopy[style] = buttonStyles[style];
                    });
                  }
                  return {
                    tag: baseButtonGenerator(buttonOptionsCopy),
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

  // If the window width is less than 900px, create the sidebar
  if (window.innerWidth <= 900) {
    sidebar(headerData);
  }

  return headerElement;
}