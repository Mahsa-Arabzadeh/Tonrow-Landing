import mapBGGenerator from "dom-generator";

import createBlueCard from "./blueCard";

//* blueCard component

/**================================================================================================
 **                                      createMap
 *?  This component is for making the map part. This section has a background-image on which there is a card and an engine.
 *@return mapBackground[div]
 *================================================================================================**/
function createMap() {
  let mapBackground = mapBGGenerator({
    tag: "div",
    //* imageMap: background section of map
    attributes: { id: "mapSection" },
    children: [
      //* card: cardBlue of map background section
      {
        tag: createBlueCard(
          "درخواست خرید",
          "وظایف سفیران شامل جمع‌آوری سفارشات، تحویل به موقع، ارتباط مؤثر با مشتریان و حفظ کیفیت خدمات است.",
          "درخواست خرید"
        ),
      },
      {
        tag: "img",
        attributes: { src: "./public/images/group.png" },
      },
    ],
  });

  return mapBackground;
}

export default createMap;
