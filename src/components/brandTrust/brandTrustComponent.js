import domGenerator from "dom-generator";
import "./index.scss";

/**
 * @param {string} - defaultSrc : The default source of images.
 * @param {string} - hoveredSrc : The hovered source of images.
 * @returns {HTMLElement} - this function generate a dom element of brand icons.
 */
function brandIconGenerator(defaultSrc, hoveredSrc) {
  const brandGenerator = document.body.appendChild(
    domGenerator({
      tag: "div",
      attributes: { class: "brand-icon", src: defaultSrc },
    })
  );

  return brandGenerator;
}

export default brandIconGenerator;
