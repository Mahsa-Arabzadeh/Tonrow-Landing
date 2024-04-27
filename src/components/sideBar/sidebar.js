// Import domGenerator function from "dom-generator" module
import domGenerator from "dom-generator";

// Import styles for the sidebar component
import "./sidebar.scss";

/**
 * Function to create the sidebar.
 * @param {Array} headerData - Data to populate the sidebar.
 * @param {string} defaultRole - Default role for the sidebar.
 * @returns {HTMLElement} - The created sidebar element.
 */
export default function sidebar(headerData, defaultRole) {
  // Create the sidebar element
  const sidebarGenerator = document.body.appendChild(
    domGenerator({
      tag: "div",
      attributes: { id: "sidebar", class: "sidebar" },
      children: [
        // Sidebar logo and line
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
            // Line under the logo
            {
              tag: "div",
              attributes: { class: "line" },
            },
          ],
        },
        // Sidebar content links
        {
          tag: "div",
          attributes: { class: "sidebar-content" },
          children: [
            // Map header data to sidebar links
            ...headerData.slice(1).map((item) => ({
              tag: "a",
              properties: { textContent: item.linkText },
              attributes: { href: item.LinkAddress ?? "#" },
            })),
          ],
        },
        // Additional link container if defaultRole is not "public"
        !headerData[0].public
          ? {
              tag: "div",
              attributes: { class: "additional-links" },
              children: [
                // Static additional link for logout
                {
                  tag: "a",
                  properties: { textContent: "خروج از حساب" },
                  attributes: { href: "#logout" },
                },
              ],
            }
          : null,
      ].filter((child) => child !== null), // Remove null elements from children array
    })
  );

  // Create overlay div
  const overlayDiv = document.body.appendChild(
    domGenerator({
      tag: "div",
      attributes: { class: "overlay" },
    })
  );

  // Function to check if the sidebar is open
  function isSidebarOpen() {
    const sidebar = document.getElementById("sidebar");
    return sidebar.classList.contains("open");
  }

  // Toggle sidebar and overlay visibility
  function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const isOpen = isSidebarOpen();
    sidebar.style.display = isOpen ? "none" : "block";
    overlayDiv.style.display = isOpen ? "none" : "block";
    sidebar.classList.toggle("open");
  }

  // Event listener to toggle sidebar
  document.querySelector(".sidebar-toggle-icon").addEventListener("click", toggleSidebar);

  // Event listener to close sidebar and overlay when clicking outside of them
  document.addEventListener("click", (event) => {
    const sidebar = document.getElementById("sidebar");
    const sidebarToggleIcon = document.querySelector(".sidebar-toggle-icon");
    if (!sidebar.contains(event.target) && !sidebarToggleIcon.contains(event.target) && isSidebarOpen()) {
      sidebar.style.display = "none";
      overlayDiv.style.display = "none";
      sidebar.classList.remove("open");
    }
  });

  return sidebarGenerator; // Return the created sidebar element
}
