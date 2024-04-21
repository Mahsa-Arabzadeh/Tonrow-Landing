import domGenerator from "dom-generator";
import "./index.scss";

function generatorDOMWhatDoesTonrowDo() {
  let conteanerGeneratorWhatDoesTonrowDo = 
  document.body.append(
    domGenerator({
        tag: "section",
        attributes: { class: "card" },
        children: [
          {
            tag: "button",
            dataAttributes: { id: "123456789" },
            properties: { textContent: "DOM-Generator" },
            eventListeners: { click: () => console.log("Hi!") },
          },
        ],
      })
  )

  return conteanerGeneratorWhatDoesTonrowDo
}
export default generatorDOMWhatDoesTonrowDo