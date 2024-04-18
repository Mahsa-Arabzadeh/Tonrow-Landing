import buttonGenerator from "dom-generator";

undefined;
function baseButtonGenerator(textContent) {
  let button = buttonGenerator({
    tag: "section",
    attributes: { id: "baseButton" },
    properties: { textContent: textContent },
  });

  return button
  
}
