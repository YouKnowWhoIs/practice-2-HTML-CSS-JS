function keyDown() {
  const box = document.getElementById("box");
  const boxZone = document.querySelector(".boxZone");

  let top = 0;
  let left = 0;

  document.addEventListener("keydown", (e) => {
    e.preventDefault();

    if (e.key === "ArrowUp") {
      if (top > 0) {
        top -= 20;
        box.style.top = top + "px";
      }
    } else if (e.key === "ArrowLeft") {
      if (left > 0) {
        left -= 20;
        box.style.left = left + "px";
      }
    } else if (e.key === "ArrowRight") {
      if (left + box.offsetWidth < boxZone.clientWidth) {
        left += 20;
        box.style.left = left + "px";
      }
    } else if (e.key === "ArrowDown") {
      if (top + box.offsetHeight < boxZone.clientHeight) {
        top += 20;
        box.style.top = top + "px";
      }
    }
  });
}

keyDown();
