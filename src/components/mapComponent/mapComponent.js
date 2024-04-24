import mapGenerator from "dom-generator";
import "./index.scss";

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

  const targets = document.querySelectorAll(".tooltips");

  // Create a new Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      console.log(entries);
      // Loop through the target elements
      for (let i = 0; i < targets.length; i++) {
        // Check if the current target is intersecting the viewport
        if (entries[i].isIntersecting) {
          // If the current target is intersecting, start the animation
          targets[i].classList.add("animated");
        } else {
          // If the current target is not intersecting, stop the animation
          targets[i].classList.remove("animated");
        }
      }
    },
    {
      // Set the root margin to 100px
      rootMargin: "100px",
    }
  );

  // Observe all the target elements
  for (let i = 0; i < targets.length; i++) {
    observer.observe(targets[i]);
    console.log(targets[i]);
  }
}

export default renderMap;
