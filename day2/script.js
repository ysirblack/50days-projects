const circles = document.querySelectorAll(".circle");
// const step_lines = document.querySelectorAll(".step__line");
const prevBtn = document.getElementById("btn__prev");
const nextBtn = document.getElementById("btn__next");
const emptyLine = document.getElementById("empty__line");

let index = 0;

prevBtn.addEventListener("click", () => {
  if(index == 0) return;
  if(index == circles.length - 1) nextBtn.classList.remove("btn--disabled"); 
  circles[index].classList.remove("circle--active");
  index--;
  // step_lines[index].classList.remove("step__line--active");
  emptyLine.style.width = `${(index) * 33.33}%`;
  if (index == 0) {
    console.log("reset");
    prevBtn.classList.add("btn--disabled");
  } 
});

nextBtn.addEventListener("click", () => {
  if (index >= circles.length - 1) {
    return;
  }
  // step_lines[index].classList.add("step__line--active");
  emptyLine.style.width = `${(index + 1) * 33.33}%`;
  index++;
  console.log(index);
  circles[index].classList.add("circle--active");

  if (index > 0) prevBtn.classList.remove("btn--disabled");
  if (index === circles.length - 1) {
    nextBtn.classList.add("btn--disabled");
  }
});
