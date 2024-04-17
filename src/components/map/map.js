import domGenerator from "dom-generator";

function createMap() {
  domGenerator({
    tag: "div",
    attributes: { id: "map" },
    children: [
      {
        tag: "div",
        attributes: { id: "cardBlue" },
      },
    ],
  });
}
