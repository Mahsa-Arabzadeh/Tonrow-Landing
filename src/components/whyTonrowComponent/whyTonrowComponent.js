import { whayTonrowData } from "./data";
import { whyTonrowCardGenerator } from "./data";
import "./index.scss";

function whyTonrowGenerator() {
  const section = document.createElement("section");
  const secTitle = document.createElement("div");
  const cardContainer = document.createElement("div");
  section.appendChild(secTitle);
  section.appendChild(cardContainer);
  secTitle.textContent = "چرا  تنرو  را  انتخاب  کنیم؟";
  section.setAttribute("class", "section");
  secTitle.setAttribute("class", "sec-title");
  cardContainer.setAttribute("class", "card-container");

  const generateCard = whayTonrowData.forEach((data) => {
    cardContainer.appendChild(
      whyTonrowCardGenerator(
        data.title,
        data.description,
        data.icon,
        data.bgColor
      )
    );
  });

  document.body.appendChild(section);

  return generateCard;
}

export { whyTonrowGenerator };
