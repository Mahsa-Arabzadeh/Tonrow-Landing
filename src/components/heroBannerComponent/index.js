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
              attributes : { class :"logo-image" ,src : "./public/images/heroBannerImages/Logotype.png"}
            },

            // hero image
            {
              tag: "img",
              attributes : { class: "hero-image" ,src : "./public/images/heroBannerImages/hero.png"}
            },

            // shadow image
            {
              tag: "img",
              attributes : {class :"shadow-image",src : "./public/images/heroBannerImages/shadow.png"}
            },

            // down arrow image
            {
              tag: "img",
              attributes : {class : "downArrow-image"  ,src : "./public/images/heroBannerImages/arrow.svg"}
            },

            //  subcard image (mobile)
            {
              tag: "img",
              attributes : {src : "public/images/heroBannerImages/Subtract-mobile.png"}
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


  

