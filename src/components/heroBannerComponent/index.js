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
          children : [

            // logo image
            {
              tag: "img",
              attributes : {  src : "./public/images/heroBannerImages/Logotype.png"}
            },

            // hero image
            {
              tag: "img",
              attributes : {src : "./public/images/heroBannerImages/hero.png"}
            },

            // shadow image
            {
              tag: "img",
              attributes : {src : "./public/images/heroBannerImages/shadow.png"}
            },

            // down arrow image
            {
              tag: "img",
              attributes : {src : "./public/images/heroBannerImages/arrow.svg"}
            }
          ]
        },
      ],
       // end of hero banner (all image,icon,shasow in hero section)
  
    }
    // end of hero section
  )

);

  }


  

