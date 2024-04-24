import domGenerator from "dom-generator";
import "./index.scss"
import "./responsive.scss"


let descriptionData = {
  heroTitle :  "سامانه تنرو",
  textContent : 'دریافت سریع خدمات حمل و نقل و انجام کار با 5 سال سابقه کار با بزرگترین فروشگاه ها و سازمان های بوشهر'
}


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
        attributes: { id: "herobBanner-Container"},
        children : [
          

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
              attributes : {class : "subcard-image",src : "./public/images/heroBannerImages/Subtract-mobile.png"}
            }
          
          ]
        }
        ]
      },



         // end of hero banner (all image,icon,shasow in hero section)
         

        //  start of hero description
        {
          tag : "div" ,
          attributes : {id : "hero-description"},
          children :[
            {
              tag : "h1",
              attributes : { class : "hero-title"},
              properties : {textContent : descriptionData.heroTitle}
            },
            {
              tag : "span",
              attributes : {class : "hero-textContent"},
              properties : {textContent : descriptionData.textContent}
            
            }
          ]
        }

      ],
      // end of hero section children
    }
    // end of hero section
  )

);

  }


  

