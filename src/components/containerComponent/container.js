import domGenerator from "dom-generator";
// import all section here:
import heroBannerSection from "../heroBannerComponent";
import generateBrandTrust from "../brandTrust/brandTrustComponent";
import { whyTonrowGenerator } from "../whyTonrowComponent/whyTonrowComponent";
// ...
// import all section here:
import "./index.scss";
import "../../../root.scss";

/**
 * @returns {HTMLElement} - container Dom element.
 */
function containerComponent() {
  const container = domGenerator({
    tag: "container",
    attributes: { class: "container" },
    dataAttributes: { font: "iranSans" },
    children: [
      {
        tag: heroBannerSection(),
      },
      // What services does Tenro provide section
      // {
      //   tag: //...
      // },
      // map section
      // {
      //   tag: //...,
      // },

      // Why choose Tenero section
      {
        tag: whyTonrowGenerator(),
      },
      // What brands trusted us section
      {
        tag: generateBrandTrust(),
      },
    ],
  });
  return container;
}

export default containerComponent;
