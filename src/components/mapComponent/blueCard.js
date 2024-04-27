import cardGenerator from "dom-generator";

import baseButtonGenerator from "../buttonComponent/buttonComponent";

/**================================================================================================
 **                                      createBlueCard
 *?  This section is responsible for creating the blue card component in the map section.This card contains a title and description and a button that is made in this part.The texts are given as input to the function so that it can be changed.
 *@param title string
 *@param description string
 *@param buttonText string
 *@return blueCard[card]
 *================================================================================================**/
function createBlueCard(title, description, textButton) {
  let blueCard = cardGenerator({
    tag: "div",
    //* map: parent section of map
    attributes: { id: "blueCard" },
    children: [
      {
        tag: "div",
        attributes: { id: "descriptionSellCard" },
        children: [
          {
            tag: "h1",
            //* imageMap: background section of map
            properties: { textContent: title },
          },
          {
            tag: "p",
            //* imageMap: background section of map
            properties: {
              textContent: description,
            },
          },
          {
            tag: baseButtonGenerator({
              content: "درخواست خرید",
              size: "large",
              statues: "primaryFill",
              type: "button",
              class: "btn-primary",
            }),
          },
        ],
      },
    ],
  });

  return blueCard;
}
export default createBlueCard;
