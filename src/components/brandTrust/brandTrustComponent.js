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
      tag: "img",
      attributes: { class: "brand-icon", src: defaultSrc },
      eventListeners: {
        mouseover: (e) => {
          const mouseOver = e.target.setAttribute("src", hoveredSrc);
        },
        mouseout: (e) => {
          const mouseOut = e.target.setAttribute("src", defaultSrc);
        },
      },
    })
  );

  return brandGenerator;
}

export default brandIconGenerator;
