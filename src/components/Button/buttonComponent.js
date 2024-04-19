import domGenerator from "dom-generator";

/**=======================================================================================================================
 **                                                 baseButtonGenerator
 *?  This is the button creation function. This function creates the button component and supports different buttons according to the figma layout and outside the layout. This algorithm can also be developed.
 *@param textContent String
 *@param color String
 *@param backgroundColor String
 *@param borderColor String
 *@param imageSrc String
 *@param width Number
 *@param height Number
 *@return type
 *=======================================================================================================================**/
function baseButtonGenerator(
  textContent,
  color,
  backgroundColor,
  borderColor,
  imageSrc,
  width,
  height
) {
  let button = domGenerator({
    tag: "button",
    attributes: { id: "baseButton" },
    properties: { textContent: textContent },
  });

  button.style.color = color;
  button.style.backgroundColor = backgroundColor;
  button.style.border = "1.5px solid " + borderColor;
  button.style.width = width + "px";
  button.style.height = height + "px";

  if (imageSrc) {
    var image = document.createElement("img");
    image.src = imageSrc;
    button.appendChild(image);
  }

  return button;
  // document.body.append(button);
}

// function baseButtonGenerator(buttonsConfig) {
//   let button = domGenerator({
//     tag: "button",
//     attributes: { id: "baseButton" },
//   });

//   for (let i = 0; i < buttonsConfig.length; i++) {
//     let buttonConfig = buttonsConfig[i];

//     button.style.color = buttonConfig.color;
//     button.textContent = buttonConfig.textContent
//     button.style.backgroundColor = buttonConfig.backgroundColor;
//     button.style.border = "1px solid " + buttonConfig.borderColor;
//     button.style.width = buttonConfig.width + "px";
//     button.style.height = buttonConfig.height + "px";

//     if (buttonConfig.imageSrc) {
//       let image = document.createElement("img");
//       image.src = buttonConfig.imageSrc;
//       button.appendChild(image);
//     }

//     document.body.appendChild(button);
//   }
// }

export default baseButtonGenerator;
