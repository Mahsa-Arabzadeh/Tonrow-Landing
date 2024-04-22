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
        // start of hero banner (all image,icon,shasow in hero section)
        {
          tag: "div",
          attributes: { id: "hero-banner" },

        },
      ],
      // end of 
    }
    // end of hero section
  )

);

  }