import domGenerator from "dom-generator";

import createTooltip from "./tooltipGenerator";
import createBlueCard from "./blueCard";

//* blueCard component

/**================================================================================================
 **                                      createMap
 *?  This component is for making the map part. This section has a background-image on which there is a card and an engine.
 *@return mapBackground {section}
 *================================================================================================**/
function createMap() {
  //* map on array tooltips 
  const tooltips = createTooltip("div", "tooltips", "", 5).map(
    (item) => {
      return {
        tag: item,
      };
    }
  );

  // start domGenerator
  let mapBackground = domGenerator({
    tag: "div",
    //* imageMap: background section of map
    attributes: { id: "mapSection" },
    children: [
      //* card: cardBlue of map background section
      {
        tag: createBlueCard(
          "درخواست خرید",
          "وظایف سفیران شامل جمع‌آوری سفارشات، تحویل به موقع، ارتباط مؤثر با مشتریان و حفظ کیفیت خدمات است.",
        ),
      },
      {
        tag: "img",
        attributes: { src: "./public/images/group.png" , class:'motorDelivery' },
      },
      //* catch array tooltips
      ...tooltips,
    ],
  });
  return mapBackground;

}

export default createMap;
