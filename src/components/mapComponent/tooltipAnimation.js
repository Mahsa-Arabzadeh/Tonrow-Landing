"use strict";

//* Animation of displaying tooltips.This animation assigns an animation to each tooltip by selecting it.
/**
 * Animates tooltips with a delayed display and disappearance.
 */
export default function animationTooltips() {
  //* all tooltips select with class
  const elements = document.querySelectorAll(".tooltips");

  elements.forEach((element, index) => {
    const delay = (index + 1) * 0.5; // Calculate the delay dynamically

    // set intersection observer api
    // set options
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const startAnimation = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // * animate elements
          element.animate([{ opacity: 1 }], {
            duration: 8000,
            fill: "forwards",
            delay: `${delay}`,
          });

          // * settimeout for animation delay
          setTimeout(() => {
            element.style.opacity = "1";
          }, delay * 800);
        }
      });
    };

    const observer = new IntersectionObserver(startAnimation, observerOptions);

    observer.observe(element);
  });
}

// function for observe animation motor delivery
export function animateMotorDelivery() {
  // * select element
  const motorDelivery = document.querySelector(".motorDelivery");

  const startAnimation = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // * animate motorDelivery
        motorDelivery.animate(
          [
            { transform: "translateX(0)" }, // 0%
            { transform: "translateX(650px) translateY(33px)" }, // 50%
            { transform: "translateY(30px) translateX(650px)" }, // 100%
          ],
          {
            duration: 5000,
            fill: "forwards",
          }
        );
      }
    });
  };

  // * create a observer api
  const observer = new IntersectionObserver(startAnimation, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  observer.observe(motorDelivery);
}
