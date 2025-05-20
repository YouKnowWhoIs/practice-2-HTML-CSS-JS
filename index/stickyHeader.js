const head = document.getElementById("headerStick");

window.addEventListener("scroll", () => {
  let scrollPositionY = window.scrollY;

  if (scrollPositionY > 50) {
    head.classList.add("active");
  } else {
    head.classList.remove("active");
  }
});
