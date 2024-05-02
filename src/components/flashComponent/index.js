import domGenerator from "dom-generator";
import "./index.scss";

/**
 * Generates a flash maker element with the provided URL.
 * @param {Object} Flash option : The options object.
 * @param {string} options.urlFlash  :The URL of the flash.
 * @returns {HTMLElement} generated flash maker element.
 */
function flashMaker({ urlFlash = "" }) {
  const flashMaker = domGenerator({
    tag: "div",
    attributes: { class: "flash-maker" },
    children: {
      tag: "img",
      attributes: { class: "flash-url", src: urlFlash },
    },
  });

  return flashMaker;
}

export default flashMaker;
