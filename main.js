import "./src/components/AppHeader/index.scss";
import "./src/components/map/index.scss";
import headerData from "./src/components/AppHeader/data.js";
import header from "./src/components/AppHeader/index.js";
import renderMap from "./src/components/map/index.js";
import { whyTonrowGenerator } from "./src/components/WhyTonrow/index.js";

renderMap();
header(headerData);
