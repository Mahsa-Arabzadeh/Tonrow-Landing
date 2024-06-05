"use strict";

import domGenerator from "dom-generator";
import "./index.scss";
import "./index.scss";

import { whyTonrowGenerator } from "../whyTonrowComponent/whyTonrowComponent";
import renderBreakMotor from "../motorCycleComponent/motorCycleComponent";
import generateBrandTrust from "../brandTrust/brandTrustComponent";
import generatorDOMWhatDoesTonrowDo from "../whatDoesTonrowDo";
import contactUs from "../contactUsComponent/contactUs";
import heroBannerSection from "../heroBannerComponent";
import renderMap from "../mapComponent/renderMapComponent";
import flashMaker from "../flashComponent/flashes";

/**
 * @returns {HTMLElement} - container Dom element.
 */
function containerComponent() {
  const container = domGenerator({
    tag: "container",
    attributes: { class: "container" },
    dataAttributes: { font: "iranSans" },
    children: [
      // heroBanner section:
      {
        tag: heroBannerSection(),
      },
      // What services does Tonro provide section
      {
        tag: generatorDOMWhatDoesTonrowDo(),
      },
      // Why choose Tenero section
      {
        tag: flashMaker({ urlFlash: "/images/Vector 4flashblue.svg" }),
      },
      // whyTonrowGenerator section:
      {
        tag: whyTonrowGenerator(),
      },
      // motorcycle part:
      {
        tag: renderBreakMotor(),
      },
      // map animation section:
      {
        tag: renderMap(),
      },
      // flashes:
      {
        tag: flashMaker({ urlFlash: "/images/Vector 40red.svg" }),
      },
      // What brands trusted us section
      {
        tag: generateBrandTrust(),
      },
      // flashes
      {
        tag: flashMaker({ urlFlash: "/images/Vector 4flash.svg" }),
      },
      // contact us part.
      {
        tag: contactUs(),
      },
    ],
  });
  return container;
}

export default containerComponent;
