  /**================================================================================================
   **                                    timeLine
   *?  When we reached the breakMotor section, then the animation we gave this sequel to the CSS section would get rid of it.
   *@param entries {object}
   *@param observer {object}
   *================================================================================================**/

  function timeLine() {
     let animationElement = document.getElementById("motor");
  
    const startAnimation = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animationElement.style.animation = "move 18s linear";
          observer.unobserve(animationElement); // Stop observing once animation starts
        }
      });
    };
  
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
  
    const observer = new IntersectionObserver(startAnimation, observerOptions);
  
    // observer.observe(animationElement);
  }
export default timeLine