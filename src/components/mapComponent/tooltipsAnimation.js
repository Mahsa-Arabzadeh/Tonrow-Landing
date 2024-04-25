function tooltipsAnimation() {
  const targets = document.querySelectorAll(".tooltips");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const target = entry.target;
        if (entry.isIntersecting) {
          target.classList.add("animated");
        } else {
          target.classList.remove("animated");
        }
      });
    },
    {
      rootMargin: "100px",
    }
  );

  targets.forEach((target) => {
    observer.observe(target);
  });
}

export default tooltipsAnimation;
