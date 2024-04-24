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
  const tooltips = createTooltip("div", "tooltips", "this is a test", 5).map(
    (item) => {
      return {
        tag: item,
      };
    }
  );
  console.log(tooltips);
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
      //* tooltip creator function
      ...tooltips,
    ],
  });
  return mapBackground;
  // return mapBackground;
  // document.body.append(mapBackground);

  /**==============================================
   * *                  select
   *
   *   select all element on body
   *
   *=============================================**/
  // const animationElement = document.getElementById("mapSection");
  // const tooltip1 = document.getElementById("tooltips1");
  // const tooltip2 = document.getElementById("tooltips2");
  // const tooltip3 = document.getElementById("tooltips3");
  // const tooltip4 = document.getElementById("tooltips4");
  // const tooltip5 = document.getElementById("tooltips5");
  /**========================================================================
 **                           tooltip Animation
 *?  During a specified period of time, it shows each tooltip in the specified location and then cleanses.

 *========================================================================**/
  // animationElement.addEventListener("animationstart", () => {
  //   setTimeout(() => {
  //     showTooltip(tooltip1, 698, 390); // down 1
  //   }, 410);
  //   setTimeout(() => {
  //     showTooltip(tooltip2, 300, 280); // up 2
  //   }, 610);
  //   setTimeout(() => {
  //     showTooltip(tooltip3, 680, 510); // down 2
  //   }, 810);
  //   setTimeout(() => {
  //     showTooltip(tooltip4, 20, 180); // up 1
  //   }, 410);
  //   setTimeout(() => {
  //     showTooltip(tooltip5, 740, 222); // up 3
  //   }, 810);
  // });

  // function showTooltip(tooltip, x, y) {
  //   tooltip.style.display = "block";
  //   tooltip.style.left = x + "px";
  //   tooltip.style.top = y + "px";

  //   setTimeout(() => {
  //     tooltip.style.display = "none";
  //   }, 3000); // Hide tooltip after 3 seconds
  // }

  // const observer = new IntersectionObserver(
  //   entries => {
  //     entries.forEach(entry => {
  //       entry.target.classList.add('tooltip1')
  //     })
  //   },
  //   { threshold: [0, 0.25, 0.5, 0.75, 1] }
  // )

  // observer.observe(document.getElementById("tooltips1"))




}

export default createMap;
