import domGenerator from "dom-generator";
import contactItemsData from "./data";
import "./index.scss";

function contactUs() {
  const contactItem = contactItemsData.map((img) => {
    const tagContact = {
      tag: "img",
      attributes: { class: "contact-img", src: img.imageContact },
    };
    return tagContact;
  });

  const contactUs = domGenerator({
    tag: "div",
    attributes: { class: "contactus-section" },
    children: [
      {
        tag: "h2",
        attributes: { class: "contact-title" },
        properties: { textContent: "راه های ارتباط با ما " },
      },
      {
        tag: "div",
        attributes: { class: "contact-items" },
      },
    ],
  });

  return contactUs;
}

export default contactUs;
