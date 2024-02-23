document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelector(".image-slides");
  const slideCount = slides.children.length;
  let currentIndex = 0;

  function showSlide(index) {
    if (index < 0) {
      index = slideCount - 1;
    } else if (index >= slideCount) {
      index = 0;
    }
    slides.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  const interval = setInterval(nextSlide, 3500);

  document.querySelector(".prev").addEventListener("click", function () {
    clearInterval(interval);
    prevSlide();
  });

  document.querySelector(".next").addEventListener("click", function () {
    clearInterval(interval);
    nextSlide();
  });
});
