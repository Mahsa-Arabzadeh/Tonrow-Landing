"use strict";

/**
 ** timeLine
 *? When we reached the breakMotor section, then the animation we gave this sequel to the CSS section would get rid of it.
 *@param entries {object}
 *@param observer {object}
 **/

export default function timeLine(animationElement) {
  const startAnimation = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animationElement.style.animation = "runs 18s linear";
        observer.disconnect(); // Stop observing once animation starts
      }
    });
  };

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(startAnimation, observerOptions);

  observer.observe(animationElement);
}
