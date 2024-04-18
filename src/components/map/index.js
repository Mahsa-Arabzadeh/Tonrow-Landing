import mapGenerator from "dom-generator";

import createBlueCard from "./blueCard";

//
/**=======================================================================================================================
 **                                                  mapGenerator
 *?  This MAP Map makes the sequel.This function of taking a series of inputs and outputs makes it more usable.That has a card and photo.
 *@return map
 *=======================================================================================================================
 **/
function createMap() {
  let map = mapGenerator({
    tag: "div",
    //* map: parent section of map
    attributes: { id: "map" },
    children: [
      {
        tag: "div",
        //* imageMap: background section of map
        attributes: { id: "mapSection" },
        children: [
          //* card: cardBlue of map background section
        {
          tag: createBlueCard(),
        }
        ],
      },
    ],
  });

  document.body.append(map);
}

export default createMap;
