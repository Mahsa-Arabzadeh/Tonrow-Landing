import { whayTonrowData } from "./data";
import { whyTonrowCardGenerator } from "./data";
import "./index.scss";

/**
 * Function to generate the 'Why Tonrow' section.
 * @returns {HTMLElement} The generated section element.
 */
function whyTonrowGenerator() {
  // i'll refactor this.---------------------------
  const section = document.createElement("section");
  const secTitle = document.createElement("div");
  const cardContainer = document.createElement("div");
  section.appendChild(secTitle);
  section.appendChild(cardContainer);
  secTitle.textContent = "چرا  تنرو  را  انتخاب  کنیم؟";
  section.setAttribute("class", "section");
  secTitle.setAttribute("class", "sec-title");
  cardContainer.setAttribute("class", "card-container");
  // i'll refactor this.---------------------------

  //Append cards to the cardContainer to see the cards.
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
