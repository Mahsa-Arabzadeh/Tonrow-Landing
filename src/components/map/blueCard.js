import cardGenerator from "dom-generator";

function createBlueCard() {
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
            properties: { textContent: "درخواست خرید" },
          },
          {
            tag: "p",
            //* imageMap: background section of map
            properties: {
              textContent: "loremnkjfqnJFkkejqfnkjfvkjsAVKJAVjkVKJeqakvjJKVKJN",
            },
          },
          {
            tag: "button",
            attributes: { class: "sellButton" },
            properties: { textContent: "درخواست خرید" },
          },
        ],
      },
    ],
  });

  return blueCard;
}
export default createBlueCard;
