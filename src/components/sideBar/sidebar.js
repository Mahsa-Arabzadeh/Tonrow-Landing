import domGenerator from "dom-generator";
import "./sidebar.scss";

export default function sidebar(headerData) {
  const sidebarGenerator = domGenerator({
    tag: "div",
    attributes: { id: "sidebar", class: "sidebar" },
    children: [
      {
        tag: "div",
        attributes: { class: "sidebar-logo" },
        children: [
          {
            tag: "img",
            attributes: {
              src: headerData[0].imgAddress,
              alt: "Logo",
            },
          },
          {
            tag: "div",
            attributes: { class: "line" },
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
      !headerData[0].public
        ? {
            tag: "div",
            attributes: { class: "additional-links" },
            children: [
              {
                tag: "a",
                properties: { textContent: "خروج از حساب" },
                attributes: { href: "#logout" },
              },
            ],
          }
        : null,
    ].filter((child) => child !== null),
  });

  document.body.appendChild(sidebarGenerator);

  // Create overlay div
  const overlayDiv = domGenerator({
    tag: "div",
    attributes: { class: "overlay" },
  });
  document.body.appendChild(overlayDiv); // Append overlay to the body

  // Function to check if the sidebar is open
  function isSidebarOpen() {
    const sidebar = document.getElementById("sidebar");
    return sidebar.classList.contains("open");
  }
  function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const isOpen = isSidebarOpen();
    const overlay = document.querySelector(".overlay"); // Select the overlay
  
    if (isOpen) {
      sidebar.classList.remove("open"); // Close the sidebar
      overlay.style.display = "none"; // Hide the overlay
    } else {
      sidebar.classList.add("open"); // Open the sidebar
      overlay.style.display = "block"; // Show the overlay
    }
  }
  
  

  // Event listener to toggle sidebar
  const sidebarToggleIcon = document.querySelector(".sidebar-toggle-icon");
  if (sidebarToggleIcon) {
    sidebarToggleIcon.addEventListener("click", toggleSidebar);
  }

  // Event listener to close sidebar when clicking outside of it
  document.addEventListener("click", (event) => {
    const sidebar = document.getElementById("sidebar");
    const sidebarToggleIcon = document.querySelector(".sidebar-toggle-icon");

    if (
      sidebar &&
      !sidebar.contains(event.target) &&
      !sidebarToggleIcon.contains(event.target) &&
      isSidebarOpen()
    ) {
      toggleSidebar();
    }
  });

  return sidebarGenerator;
}
