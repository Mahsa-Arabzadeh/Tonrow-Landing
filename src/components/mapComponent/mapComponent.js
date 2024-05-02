import domGenerator from "dom-generator";
import "./index.scss";

import animationTooltips from "./tooltipAnimation";
import createMap from "./map";

/**
 * Renders a map section with tooltips and manages tooltip animations.
 * @returns {HTMLDivElement} - The generated map section element.
 */
function renderMap() {
  let map = domGenerator({
    tag: "div",
    //* map: parent section of map
    attributes: { id: "map" },
    children: [
      {
        tag: createMap(),
      },
    ],
  });
  // document.body.appendChild(map);
  //* Using IntersectionObserver, it manages the animation of tooltips.
  document.body.appendChild(map)
  animationTooltips();
  return map;
}

export default renderMap;
