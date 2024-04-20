import { whayTonrowData } from "./data";
import { whyTonrowCardGenerator } from "./data";
import "./index.scss";

function whyTonrowGenerator() {
  const section = document.createElement("section");
  const secTitle = document.createElement("div");
  const cardContainer = document.createElement("div");
  section.appendChild(secTitle);
  section.appendChild(cardContainer);
  section.setAttribute("class", "section");
  secTitle.setAttribute("class", "sec-title");
  cardContainer.setAttribute("class", "card-container");
  console.log(section);

  const generateCard = whayTonrowData.map((data) => {
    cardContainer.appendChild(
      whyTonrowCardGenerator(
        data.title,
        data.description,
        data.icon,
        data.bgColor
      )
    );
  });

  return generateCard;
}

export { whyTonrowGenerator };
