import "./src/components/mapComponent/index.scss";
import "./src/components/mapComponent/index.scss";
import header from "./src/components/headerComponent/headerComponent";
import { getHeaderDataByRole } from "./src/components/headerComponent/validate";
import handleHeaderError from "./src/components/headerComponent/errorHandler"; // Importing the default export from errorHandler.js
import "./src/components/headerComponent/index.scss";
import "./src/components/mapComponent/index.scss";
import renderMap from "./src/components/mapComponent/mapComponent";
import "./src/components/whatDoesTonrowDo/index.js";
// Define the default role
const defaultRole = "safir";

// Get the header data array based on the default role
const headerData = getHeaderDataByRole(defaultRole);

// Call the handleHeaderError function to handle errors and render the header
handleHeaderError(headerData);

// Render the map
renderMap();
