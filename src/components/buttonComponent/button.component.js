import domGenerator from "dom-generator";

undefined;
function baseButtonGenerator(textContent) {
  let button = domGenerator({
    tag: "button",
    attributes: { id: "baseButton" },
    properties: { textContent: textContent },
  });

  return button;
}

function changeSize(selector) {
  let button = document.getElementById("baseButton");
  switch (selector) {
    case "small":
      button.setAttribute("id", "small");
      break;
    case "medium":
      button.setAttribute("id", "medium");
      break;
    case "big":
      button.setAttribute("id", "big");
      break;
    case "borderBig":
      button.setAttribute("id", "borderBig");
      break;
  }
}
