import './buttonComponent';
import './index.scss';

const buttonOptions = {
  content: "درخواست خرید",
  size: "large",
  statues: "primaryFill",
  type: "button",
  class: "btn-primary",
  anchorLink:
    "https://",
    eventListeners:{click:()=> console.log("Hi!")},
    disabled:false,
    iconStart: "image/...."
};

export default buttonOptions;


