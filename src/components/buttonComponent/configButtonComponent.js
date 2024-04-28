import "./buttonComponent";
import "./index.scss";

/**
 * Options for generating a button element.
 * @typedef {Object} ButtonOptions
 * @property {string} content - The text content of the button.
 * @property {string} [size="medium"] - The size of the button ("small", "medium", "large").
 * @property {string} [status="primaryFill"] - The status of the button ("primaryFill", "secondaryFill", "tertiaryFill", "quaternaryFill").
 * @property {string} [type="button"] - The type of the button ("button", "submit", "reset").
 * @property {string} [class=""] - Additional class names for the button.
 * @property {string} [anchorLink="#"] - The href link for the button if it acts as an anchor.
 * @property {Object.<string, Function>} [eventListeners={}] - Event listeners to attach to the button.
 * @property {boolean} [disabled] - Whether the button should be disabled.
 * @property {string} [iconStart=""] - The URL of the image icon to display at the start of the button.
 */

const buttonOptions = {
  content: "درخواست خرید", // null or content
  size: "large", // size include: small , large , medium , extraLarge , extraSmall
  statues: "primaryFill", // include: primaryOutLine and primaryTextBtn, primaryFill
  type: "button", // If you do not need to use it | include all type button :submit , ...
  class: "btn-primary", // null or add className(If you need to class)
  anchorLink: "https://", // href | If you do not need to use it
  eventListeners: { click: () => console.log("Hi!") }, // include all events
  disabled: false, // disabled true or false ? | If you do not need to use it
  iconStart: "image/....", // include : iconStart and iconLeft | If you do not need to use it
};

export default buttonOptions;

//! WARNING
//! statues: Different button modes
//! size: Different button size
