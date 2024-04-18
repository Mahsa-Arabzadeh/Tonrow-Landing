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
              textContent:
                "وظایف سفیران شامل جمع‌آوری سفارشات، تحویل به موقع، ارتباط مؤثر با مشتریان و حفظ کیفیت خدمات است.",
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
