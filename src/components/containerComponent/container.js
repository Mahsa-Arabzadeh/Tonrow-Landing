import domGenerator from "dom-generator";
import "./index.scss";

import { whyTonrowGenerator } from "../whyTonrowComponent/whyTonrowComponent";
import generateBrandTrust from "../brandTrust/brandTrustComponent";
import heroBannerSection from "../heroBannerComponent";
import flashMaker from "../flashComponent";

// ...


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
        tag: flashMaker({ urlFlash: "/images/Vector 4flashblue.svg" }),
      },
      {
        tag: whyTonrowGenerator(),
      },
      {
        tag: flashMaker({ urlFlash: "/images/Vector 40red.svg" }),
      },
      // What brands trusted us section
      {
        tag: generateBrandTrust(),
      },
      {
        tag: flashMaker({ urlFlash: "/images/Vector 4flash.svg" }),
      },
    ],
  });
  return container;
}

export default containerComponent;
