import { whayTonrowData } from "./data";
import { whyTonrowCardGenerator } from "./data";
import domGenerator from "dom-generator";

function whyTonrowGenerator() {
  const generateCard = () => {
    whayTonrowData.forEach((data) => {
      whyTonrowCardGenerator(
        data.title,
        data.description,
        data.icon,
        data.bgColor
      );
    });
  };

  const generateComponent = domGenerator({
    tag: "section",
    attributes: { class: "section" },
    children: [
      {
        tag: "div",
        attributes: { class: "sec-title" },
        properties: { textContent: "چرا  تنرو  را  انتخاب  کنیم؟" },
      },
      {
        tag: "div",
        attributes: { class: "card-container" },
        children: [
          {
            tag: generateCard,
          },
        ],
      },
    ],
  });

  return generateComponent;
}

export { whyTonrowGenerator };
