import "./src/components/headerComponent/index.scss";
import "./src/components/mapComponent/index.scss";

import buttonsConfig from "./src/components/buttonComponent/configButtonComponent.js";
import baseButtonGenerator from "./src/components/buttonComponent/buttonComponent.js";
import { getHeaderDataByRole } from "./src/components/headerComponent/validate";
import { publicHeaderData } from "./src/components/headerComponent/data.js";
import header from "./src/components/headerComponent/headerComponent.js";
import renderMap from "./src/components/mapComponent/mapComponent.js";

// Define the default role

const defaultRole = "public";
renderMap()

