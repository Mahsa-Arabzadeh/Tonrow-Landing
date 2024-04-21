import domGenerator from "dom-generator";
import "./index.scss";

function generatorDOMWhatDoesTonrowDo() {
    let conteanerGeneratorWhatDoesTonrowDo =
        document.body.append(
            domGenerator({
                tag: "section",
                attributes: { class: "what-services-tonrow" },
                children: [
                    {
                        tag: "h1",
                        properties: { textContent: "تــنــرو، چه خدماتی ارائه میدهد؟" },
                    },
                ],
            })
          
        )

    return conteanerGeneratorWhatDoesTonrowDo
}
export default generatorDOMWhatDoesTonrowDo
