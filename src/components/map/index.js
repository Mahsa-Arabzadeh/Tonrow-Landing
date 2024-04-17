import mapGenerator from "dom-generator";
//
/**=======================================================================================================================
 **                                                  mapGenerator
 *?  This MAP Map makes the sequel.This function of taking a series of inputs and outputs makes it more usable.That has a card and photo.
 *@param name type
 *@param name type
 *@return type
 *=======================================================================================================================
 **/

function createMap() {
  mapGenerator({
    tag: "div",
    //* map: parent section of map
    attributes: { class: "map" },
    children: [
      {
        tag: "div",
        //* imageMap: background section of map
        attributes: { class: "mapSection" },
        children: [
          {
            tag: "div",
            //* card: cardBlue of map background section
            attributes: { class: "cardBlue" },
          },
        ],
      },
    ],
  });
}
