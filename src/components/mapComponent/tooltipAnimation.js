//* Animation of displaying tooltips.This animation assigns an animation to each tooltip by selecting it.
/**
 * Animates tooltips with a delayed display and disappearance.
 */
function animationTooltips() {
  //* all tooltips select with class
  const elements = document.querySelectorAll(".tooltips");

  elements.forEach((element, index) => {
    const delay = (index + 1) * 0.5; // Calculate the delay dynamically

    element.style.animation = `animated 5s ease-out ${delay}s`;

    setTimeout(() => {
      element.style.display = "flex";
      element.style.animationDelay = "2s"; // Set a fixed delay of 2 seconds for the animation to start
    }, delay * 800); // Convert the delay to milliseconds by multiplying with 1000

    element.addEventListener("animationend", () => {
      element.style.display = "none";
    });
  });
}

export default animationTooltips;
