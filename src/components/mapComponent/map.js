import mapBGGenerator from "dom-generator";

import createTooltip from "./tooltipGenerator";
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
      //* tooltip creator function 
      {
        tag: "img",
        attributes: { src: "./public/images/group.png" },
      },
      {
        tag: createTooltip("span", "tooltips", "hdk[hdak"),
      },
      {
        tag: createTooltip("span", "tooltips2", "hdk[hdak"),
      },
      {
        tag: createTooltip("span", "tooltips3", "hdk[hdak"),
      },
    ],
  });

  // return mapBackground;
  document.body.append(mapBackground)

  /**==============================================
   * *                  select
   *   
   *   select all element on body
   *   
   *=============================================**/
  const animationElement = document.getElementById("mapSection");
  const tooltip1 = document.getElementById("tooltips");
  const tooltip2 = document.getElementById("tooltips2");
  const tooltip3 = document.getElementById("tooltips3");
/**========================================================================
 **                           tooltip Animation
 *?  During a specified period of time, it shows each tooltip in the specified location and then cleanses.

 *========================================================================**/
  animationElement.addEventListener("animationstart", () => {
    setTimeout(() => {
      showTooltip(tooltip1, 745, 339); // Show tooltip1 after 1 second at x: 100, y: 50
    }, 410);
    setTimeout(() => {
      showTooltip(tooltip2, 745, 450); // Show tooltip1 after 1 second at x: 100, y: 50
    },610);
    setTimeout(() => {
      showTooltip(tooltip3, 600, 520); // Show tooltip1 after 1 second at x: 100, y: 50
    }, 810);
  });

  function showTooltip(tooltip, x, y) {
    tooltip.style.display = "block";
    tooltip.style.left = x + "px";
    tooltip.style.top = y + "px";

    setTimeout(() => {
      tooltip.style.display = "none";
    }, 3000); // Hide tooltip after 3 seconds
  }
}

export default createMap;
