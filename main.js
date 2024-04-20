import "./src/components/headerComponent/index.scss";
import "./src/components/whatDoesTonrowDo/index";

import { whyTonrowGenerator } from "./src/components/whyTonrowComponent/whyTonrowComponent";
import baseButtonGenerator from "./src/components/buttonComponent/buttonComponent";
import buttonOptions from "./src/components/buttonComponent/configButtonComponent";
import { getHeaderDataByRole } from "./src/components/headerComponent/validate";
import header from "./src/components/headerComponent/headerComponent";
import renderMap from "./src/components/mapComponent/mapComponent";

// Define the default role
const defaultRole = "public";



const customButton = baseButtonGenerator(buttonOptions);
document.body.appendChild(customButton);