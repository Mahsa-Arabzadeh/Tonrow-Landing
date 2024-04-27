// import domGenerator from "dom-generator";
import domGenerator from "dom-generator";

/**========================================================================
 **                           FUNCTION NAME
 *?  This function creates a tooltip by taking inputs. These inputs return the type of element and the number of tooltips and its internal content.
 *@param tagName {element}
 *@param className {string}
 *@param text {string}
 *@param numOfTooltips {number}
 *@return {Array}
 *========================================================================**/
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


