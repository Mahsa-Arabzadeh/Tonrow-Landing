import domGenerator from "dom-generator";
import "./index.scss";



export default function heroBannerSection() {

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

    
}


const heroGenerator = document.body.appendChild(
  domGenerator(
    // start of hero section
    {
      tag: "section",
      attributes: { id: "hero-section" },
      children: [
        {
          tag: "div",
          attributes: { id: "hero-banner" },
        },
      ],
    }
  )


);

