import { whayTonrowData } from "./data";
import { whyTonrowCardGenerator } from "./data";

function whyTonrowGenerator() {
  const generatComponent = whayTonrowData.map((data) => {
    document.body.appendChild(
      whyTonrowCardGenerator(
        data.title,
        data.description,
        data.icon,
        data.bgColor
      )
    );
  });
  return generatComponent;
}

export { whyTonrowGenerator };
