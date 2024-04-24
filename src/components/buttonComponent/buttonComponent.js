import domGenerator from "dom-generator";
import "./index.scss";
import buttonsConfig from "./configButtonComponent";

/**=======================================================================================================================
 **                                                 baseButtonGenerator
 *?  This is the button creation function. This function creates the button component and supports different buttons according to the figma layout and outside the layout. This algorithm can also be developed.
 *@param buttonOptions {object}
 *@return button {button}
 *=======================================================================================================================**/

function baseButtonGenerator(buttonOptions) {
  let button = domGenerator({
    tag: "button",
  });

  // Set the content of the button
  // button.textContent = buttonOptions.content;
  // button.textContent = buttonOptions.content ?? "button";

  // Set the type of the button
  // button.type = buttonOptions.type;
  // button.type = buttonOptions.type ?? "default";

  const { content = "button", type = "default" } = buttonOptions;

  // Set the size of the button
  button.classList.add(buttonOptions.size);

  // Disable the button if necessary
  if (buttonOptions.disabled) {
    button.disabled = true;
  }

  if (buttonOptions.anchorlink) {
    button.href = buttonOptions.anchorlink;
  }

  // Add attributes to the button
  Object.keys(buttonOptions.attributes).forEach((attribute) => {
    button.setAttribute(attribute, buttonOptions.attributes[attribute]);
  });

  // Add data attributes to the button
  Object.keys(buttonOptions.dataattributes).forEach((dataAttribute) => {
    button.dataset[dataAttribute] = buttonOptions.dataattributes[dataAttribute];
  });

  if (buttonOptions.onclick) {
    button.addEventListener("click", buttonOptions.onclick);
  }

  // Add a start icon to the button
  if (buttonOptions.starticon) {
    const span = document.createElement("span");
    span.classList.add("btn-icon", "btn-start-icon");
    span.innerHTML = buttonOptions.starticon;
    button.insertBefore(span, button.firstChild);
  }

  // Add an end icon to the button
  if (buttonOptions.endicon) {
    const span = document.createElement("span");
    span.classList.add("btn-icon", "btn-end-icon");
    span.innerHTML = buttonOptions.endicon;
    button.appendChild(span);
  }

  return button;
}

export default baseButtonGenerator;
