import domGenerator from "dom-generator";

/**=======================================================================================================================
 **                                                 baseButtonGenerator
 *?  This is the button creation function. This function creates the button component and supports different buttons according to the figma layout and outside the layout. This algorithm can also be developed.
 *@param buttonOptions {string}
 *@return button {object}
 *=======================================================================================================================**/
function baseButtonGenerator(buttonOptions) {
  let button = domGenerator({
    tag: "button",
    attributes: { id: "baseButton" },
  });

  button.textContent = buttonOptions.content;

  Object.keys(buttonOptions).forEach((property) => {
    if (property !== "content") {
      button.style[property] = buttonOptions[property];
    }
  });

  return button;
}

export default baseButtonGenerator;

//todo  TODO:
// set attribute
//
