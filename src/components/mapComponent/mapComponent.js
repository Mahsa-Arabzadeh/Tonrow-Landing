import "./src/components/mapComponent/index.scss";
import mapGenerator from "dom-generator";

import createMap from "./map";

//* map component

//
/**=======================================================================================================================
 **                                                  mapGenerator
 *?  This MAP Map makes the sequel.This function of taking a series of inputs and outputs makes it more usable.That has a card and photo.
 *@return map
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
}

export default renderMap;
