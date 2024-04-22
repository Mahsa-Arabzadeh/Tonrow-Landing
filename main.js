// import "./src/components/heroBannerComponent/index";
import "./src/components/headerComponent/index.scss";
import "./src/components/buttonComponent/index.scss";
import "./src/components/mapComponent/index.scss";
import "./src/components/whatDoesTonrowDo/index";

import { whyTonrowGenerator } from "./src/components/whyTonrowComponent/whyTonrowComponent";
// import buttonOptions from "./src/components/buttonComponent/configButtonComponent";
import baseButtonGenerator from "./src/components/buttonComponent/buttonComponent";
import generatorDOMWhatDoesTonrowDo from "./src/components/whatDoesTonrowDo/index";
import brandIconGenerator from "./src/components/brandTrust/brandTrustComponent";
import { getHeaderDataByRole } from "./src/components/headerComponent/validate";
import header from "./src/components/headerComponent/headerComponent";
// import renderMap from "./src/components/mapComponent/mapComponent";
// import test from "./src/components/whatDoesTonrowDo/index";
// import test from "./src/components/whatDoesTonrowDo/index";

// Define the default role

// const defaultRole = "public";

// const customButton = baseButtonGenerator(buttonOptions);
// document.body.appendChild(customButton);

const defaultRole = "safir";

const buttonOptions = {
  content: "My Button",
  size: "large",
  type: "button",
  attributes: {
    class: "btn-primary",
  },
  dataattributes: {
    main: "primer",
  },
};
// button
//! Testing 
const customButton = baseButtonGenerator(buttonOptions);
document.body.appendChild(customButton);

generatorDOMWhatDoesTonrowDo();

brandIconGenerator();
