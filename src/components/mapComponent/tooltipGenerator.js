import domGenerator from "dom-generator";

function createTooltip(tagName, idName, text) {
  let tooltip = domGenerator({
    tag: tagName,
    //* imageMap: background section of map
    attributes: { id: idName},
    dataAttributes: { data: "123456789" },
    properties: { textContent: text },
  });

  return tooltip;
}

export default createTooltip