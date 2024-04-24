import domGenerator from "dom-generator";
import "./index.scss";

const rowTitle = [
  {
    rowTitle: "سفیر",
  },
  {
    rowTitle: "کودتاگر",
    rowTextLinkArray: [
      {
        rowTextLink: "fds",
      },
      {
        rowTextLink: "fds",
      },
    ],
  },
  {
    rowTitle: "hfjd",
  },
];

// rowTitle.map((title) => {
//   rowGenerator(title.rowTitle);
// });

/**
 * @param {rowTitle} rowTitle
 * @returns {HTMLElement}
 */
// function rowGenerator(rowTitle) {
//   const rowElement = document.body.appendChild(
//     domGenerator({
//       tag: "div",
//       attributes: { class: "row-footer" },
//       children: [
//         {
//           tag: "h3",
//           attributes: { class: "row-title" },
//           properties: { textContent: rowTitle },
//         },
//         {
//           tag: "div",
//           attributes: { class: "text-container" },
//           // links and texts placed here.
//           // ...
//         },
//       ],
//     })
//   );

//   return rowElement;
// }

// ####################### rowText #######################
const rowTextArray = [
  {
    rowTextLink: "fsfd",
  },
  {
    rowTextLink: "fsfd",
  },
];

rowTextArray.map((text) => {
  rowTextGenerator(text.rowTextLink);
});

export function rowTextGenerator(rowTextLink) {
  const rowText = document.body.appendChild(
    domGenerator({
      tag: "p",
      attributes: { class: "text-row" },
      properties: { textContent: rowTextLink },
    })
  );

  return rowText;
}
