import cardGenerator from "dom-generator";

/**================================================================================================
 **                                      FUNCTION NAME
 *?  What does it do?
 *@param title string  
 *@param description string  
 *@param buttonText string  
 *@return section
 *================================================================================================**/
function createBlueCard(title , description , textButton) {
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
