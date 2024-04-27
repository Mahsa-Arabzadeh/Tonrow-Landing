import domGenerator from "dom-generator";
import "./index.scss";

/**=======================================================================================================================
 **                                                 baseButtonGenerator
 *?  This is the button creation function. This function creates the button component and supports different buttons according to the figma layout and outside the layout. This algorithm can also be developed.
 *@param buttonOptions {object}
 *@return button {button}
 *=======================================================================================================================**/

function baseButtonGenerator({
  content,
  size = "medium",
  statues = "primaryFill",
  type = "button",
  className = "",
  anchorLink = "#",
  eventListeners = {},
  disabled,
  iconStart = "",
  iconEnd = "",
}) {
  let button = domGenerator({
    tag: "div",
    attributes: {
      class: `buttonComponentWrapper  ${className}`,
    },
    dataAttributes: { size: size, status: statues },
    eventListeners,
    children: [
      {
        tag:'img',
        attributes:{src:iconStart}
      },
      {
        tag: "button",
        properties: { textContent: content },
        attributes: {
          class: `buttonComponent`,
          href: anchorLink,
        },
      },
      {
        tag:'img',
        attributes:{src:iconEnd}

      },
    ],
  });

  // Set the type of the button
  button.type = type ?? "button";

  if (disabled) {
    button.disabled = true;
  }

  return button;
}

export default baseButtonGenerator;
