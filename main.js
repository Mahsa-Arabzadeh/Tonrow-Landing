import header from "./src/components/AppHeader/index.js";
import headerData from "./src/components/AppHeader/data.js";
import "./src/components/AppHeader/index.scss";
import "./src/components/map/index.scss";
import renderMap from "./src/components/map/index.js";
// import { whyTonrowGenerator } from "./src/components/WhyTonrow/index.js";

header(headerData);
renderMap();
