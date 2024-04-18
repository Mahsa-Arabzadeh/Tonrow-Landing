import mapGenerator from "dom-generator";

import createBlueCard from "./blueCard";

function createMap() {
  let mapBackground = mapGenerator({
    tag: "div",
    //* imageMap: background section of map
    attributes: { id: "mapSection" },
    children: [
      //* card: cardBlue of map background section
      {
        tag: createBlueCard(),
      },
    ],
  });

  return mapBackground;
}

export default createMap;
