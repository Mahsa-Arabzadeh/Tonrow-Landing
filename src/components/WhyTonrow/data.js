import { section } from "../../JS/constants/constants";
import { whyTonrowGenerator } from ".";

const whayTonrowData = [
  {
    title: "به صرفه",
    description: "ارزان ترین فروشگاه های ممکن نزدیک به شما ",
    icon: "",
  },
];

whayTonrowData.forEach((data) => {
  section.appendChild(
    whyTonrowGenerator(data.title, data.description, data.icon)
  );
});
