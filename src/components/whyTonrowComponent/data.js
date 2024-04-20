import { whyTonrowGenerator } from "./index.js";

const whayTonrowData = [
  {
    title: "به صرفه",
    description: "ارزان ترین فروشگاه های ممکن نزدیک به شما ",
    icon: "",
  },
];

whayTonrowData.forEach((data) => {
  document.body.appendChild(
    whyTonrowGenerator(data.title, data.description, data.icon)
  );
});
