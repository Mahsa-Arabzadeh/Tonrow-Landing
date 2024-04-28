import domGenerator from "dom-generator";
import "./index.scss";

/**
 * Generates a base button element with optional properties.
 * @param {Object} options - The options for generating the button.
 * @param {string} options.content - The text content of the button.
 * @param {string} [options.size="medium"] - The size of the button ("small", "medium", "large").
 * @param {string} [options.status="primaryFill"] - The status of the button ("primaryFill", "secondaryFill", "tertiaryFill", "quaternaryFill").
 * @param {string} [options.type="button"] - The type of the button ("button", "submit", "reset").
 * @param {string} [options.className=""] - Additional class names for the button.
 * @param {string} [options.anchorLink="#"] - The href link for the button if it acts as an anchor.
 * @param {Object} [options.eventListeners={}] - Event listeners to attach to the button.
 * @param {boolean} [options.disabled] - Whether the button should be disabled.
 * @param {string} [options.iconStart=""] - The URL of the image icon to display at the start of the button.
 * @param {string} [options.iconEnd=""] - The URL of the image icon to display at the end of the button.
 * @returns {HTMLDivElement} - The generated button element.
 */

function baseButtonGenerator({
  content,
  size = "medium",
  statues = "primaryFill",
  type = "button",
  className = "",
  anchorLink = "#",
  eventListeners = {},
  disabled,
  iconStart = "",
  iconEnd = "",
}) {
  let button = domGenerator({
    tag: "div",
    attributes: {
      class: `buttonComponentWrapper  ${className}`,
    },
    dataAttributes: { size: size, status: statues },
    eventListeners,
    children: [
      {
        tag: "img",
        attributes: { src: iconStart },
      },
      {
        tag: "button",
        properties: { textContent: content },
        attributes: {
          class: `buttonComponent`,
          href: anchorLink,
        },
      },
      {
        tag: "img",
        attributes: { src: iconEnd },
      },
    ],
  });

  // Set the type of the button
  button.type = type ?? "button";

  if (disabled) {
    button.disabled = true;
  }

  return button;
}

export default baseButtonGenerator;
