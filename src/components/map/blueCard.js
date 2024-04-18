import cardGenerator from "dom-generator";

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
            tag: "button",
            attributes: { class: "sellButton" },
            properties: { textContent: textButton },
          },
        ],
      },
    ],
  });

  return blueCard;
}
export default createBlueCard;
