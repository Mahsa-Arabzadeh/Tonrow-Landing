import "./src/components/headerComponent/index.scss";
import "./src/components/mapComponent/index.scss";

import { getHeaderDataByRole } from "./src/components/headerComponent/validate";
import baseButtonGenerator from "./src/components/Button/buttonComponent.js";
import buttonsConfig from "./src/components/Button/configButtonComponent.js";
import header from "./src/components/headerComponent/headerComponent";
import renderMap from "./src/components/mapComponent/mapComponent";
import headerData from "./src/components/AppHeader/data.js";

// Define the default role
const defaultRole = "public";

// Get the header data array based on the default role
const headerData = getHeaderDataByRole(defaultRole);

// Call the handleHeaderError function to handle errors and render the header
handleHeaderError(headerData);

// Render the map
renderMap();

