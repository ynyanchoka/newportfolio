
  document.addEventListener("DOMContentLoaded", function () {
    const slideCards = document.querySelectorAll(".slide-card");

    const observer = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
            observer.unobserve(entry.target); // optional: stop observing after animation
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    slideCards.forEach(card => observer.observe(card));
  });

