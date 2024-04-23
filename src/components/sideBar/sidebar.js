// Import domGenerator function
import domGenerator from "dom-generator";

// Import styles
import "./sidebar.scss";
// Function to create the sidebar
export default function sidebar(headerData, defaultRole) {
  // Create the sidebar element
  const sidebarGenerator = document.body.appendChild(
    domGenerator({
      tag: "div",
      attributes: { id: "sidebar", class: "sidebar" },
      children: [
        {
          tag: "div",
          attributes: { class: "sidebar-logo" },
          children: [
            // Logo element
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
          attributes: { class: "sidebar-content" },
          children: [
            ...headerData.slice(1).map((item) => ({
              tag: "a",
              properties: { textContent: item.linkText },
              attributes: { href: item.LinkAddress || "#" },
            })),
          ],
        },
        // Additional link container
        defaultRole !== "public" ? {
          tag: "div",
          attributes: { class: "additional-links" },
        } : null,
      ].filter((child) => child !== null), // Remove null elements from children array
    })
  );

  // Function to render additional link
  function renderAdditionalLink(linkData) {
    const additionalLink = domGenerator({
      tag: "a",
      properties: { textContent: linkData.linkText },
      attributes: { href: linkData.LinkAddress || "#" },
    });

    sidebarGenerator.querySelector(".additional-links").appendChild(additionalLink);
  }

  // Check if there's an additional link to render based on default role
  if (defaultRole !== "public") {
    const additionalLink = headerData.slice(1).find((item) => item.linkText !== undefined && item.LinkAddress !== undefined);
    if (additionalLink) {
      renderAdditionalLink(additionalLink);
    }
  }

  // Close sidebar when clicking outside of it
  document.addEventListener("click", (event) => {
    const sidebar = document.getElementById("sidebar");
    const sidebarToggleIcon = document.querySelector(".sidebar-toggle-icon");
    if (sidebar && !sidebar.contains(event.target) && !sidebarToggleIcon.contains(event.target)) {
      sidebar.style.display = "none";
    }
  });

  // Hide additional-links if defaultRole is "public"
  if (defaultRole === "public") {
    const additionalLinksContainer = sidebarGenerator.querySelector(".additional-links");
    if (additionalLinksContainer) {
      additionalLinksContainer.style.display = "none";
    }
  }

  return sidebarGenerator;
}