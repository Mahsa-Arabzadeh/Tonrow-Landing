import mapGenerator from "dom-generator";
import "./index.scss";

import tooltipsAnimation from "./tooltipsAnimation";
import createMap from "./map";

//* map component

//
/**=======================================================================================================================
 **                                                  mapGenerator
 *?  This MAP Map makes the sequel.This function of taking a series of inputs and outputs makes it more usable.That has a card and photo.
 *@return map {object}
 *=======================================================================================================================
 **/
function renderMap() {
  let map = mapGenerator({
    tag: "div",
    //* map: parent section of map
    attributes: { id: "map" },
    children: [
      {
        tag: createMap(),
      },
    ],
  });
  // return map;
  document.body.append(map);
  //* Using IntersectionObserver, it manages the animation of tooltips.
  tooltipsAnimation();

  const elements = document.querySelectorAll(".tooltips");

  elements.forEach((element, index) => {
    element.style.animation = `animated 1s ease-out ${(index + 1) * 0.5}s`;

    element.addEventListener("animationend", () => {
      element.style.display = "flex";
    });
  });
}

export default renderMap;
