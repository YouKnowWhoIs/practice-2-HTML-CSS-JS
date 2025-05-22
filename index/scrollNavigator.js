function scrollNavigator() {
  const main = document.getElementById("main");

  const div = document.createElement("div");
  const spanUp = document.createElement("span");
  const spanDown = document.createElement("span");

  const svgUp = `
  <svg class="icon icon-chevron-up" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.297 20.797l-2.594 2.578c-0.391 0.391-1.016 0.391-1.406 0l-8.297-8.297-8.297 8.297c-0.391 0.391-1.016 0.391-1.406 0l-2.594-2.578c-0.391-0.391-0.391-1.031 0-1.422l11.594-11.578c0.391-0.391 1.016-0.391 1.406 0l11.594 11.578c0.391 0.391 0.391 1.031 0 1.422z"/>
  </svg>`;

  const svgDown = `
  <svg class="icon icon-chevron-down" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.297 12.625l-11.594 11.578c-0.391 0.391-1.016 0.391-1.406 0l-11.594-11.578c-0.391-0.391-0.391-1.031 0-1.422l2.594-2.578c0.391-0.391 1.016-0.391 1.406 0l8.297 8.297 8.297-8.297c0.391-0.391 1.016-0.391 1.406 0l2.594 2.578c0.391 0.391 0.391 1.031 0 1.422z"/>
  </svg>`;

  div.classList.add("scrollNavigationConteiner");
  spanUp.classList.add("scrollUp");
  spanDown.classList.add("scrollDown");

  main.appendChild(div);
  div.appendChild(spanUp);
  div.appendChild(spanDown);

  spanUp.innerHTML = svgUp;
  spanDown.innerHTML = svgDown;

  spanUp.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  spanDown.addEventListener("click", () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  });
}

scrollNavigator();
