import domGenerator from "dom-generator";
import "./index.scss";

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
