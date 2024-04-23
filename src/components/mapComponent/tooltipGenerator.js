import domGenerator from "dom-generator";

class Tooltip {
  constructor(tagName, idName, text) {
    this.tagName = tagName;
    this.idName = idName;
    this.text = text;
  }

  generate() {
    return domGenerator({
      tag: this.tagName,
      attributes: { id: this.idName },
      dataAttributes: { data: "123456789" },
      properties: { textContent: this.text },
    });
  }
}

function createTooltips(tagName, idPrefix, text, count) {
  let tooltips = [];
  for (let i = 1; i <= count; i++) {
    let id = idPrefix + i;
    let tooltip = new Tooltip(tagName, id, text);
    tooltips.push(tooltip.generate());
  }
  return tooltips;
}

export default createTooltips
