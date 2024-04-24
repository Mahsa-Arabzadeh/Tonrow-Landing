// import domGenerator from "dom-generator";
import domGenerator from "dom-generator";

// class Tooltip {
//   constructor(tagName, className, text) {
//     this.tagName = tagName;
//     this.className = className;
//     this.text = text;
//   }

//   generate() {
//     return domGenerator({
//       tag: this.tagName,
//       attributes: { class: this.className },
//       dataAttributes: { data: "123456789" },
//       properties: { textContent: this.text },
//     });
//   }
// }

// function createTooltips(tagName, classPrefix, text, count) {
//   let tooltips = [];
//   for (let i = 1; i <= count; i++) {
//     let tooltip = new Tooltip(tagName, classPrefix, text);
//     tooltips.push(tooltip.generate());
//   }
//   return tooltips;
// }


// Function to create a tooltip with a specified number of tooltips and a common class
function createTooltip(tagName, className, text, numOfTooltips) {
  // Create an array to store the tooltips
  const tooltips = [];

  // Loop through the specified number of tooltips
  for (let i = 0; i < numOfTooltips; i++) {
    // Create a new tooltip
    const tooltip = domGenerator({
      tag: tagName,
      attributes: { class: className },
      dataAttributes: { data: "123456789" },
      properties: { textContent: text },
    });

    // Add the tooltip to the array
    tooltips.push(tooltip);
  }

  // Return the array of tooltips
  return tooltips;
}

export default createTooltip;
