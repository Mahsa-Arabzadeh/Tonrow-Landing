import domGenerator from "dom-generator";
import "./index.scss";


const heroGenerator = document.body.appendChild(

    domGenerator(

        // start of hero section
        {
            tag: "section",
            attributes: { id: "hero-section" },
            children: [

                {
                    tag : "div",
                    attributes : {id:"hero-banner"}
                }
                

            ]

        })
)


