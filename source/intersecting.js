function entryElementToScroll(elements) {
  elements.forEach((element) => {
    element.isIntersecting === true
      ? element.target.classList.add("show")
      : element.target.classList.remove("show");
  });
}

const options = { threshold: [0.5] };
let observer = new IntersectionObserver(entryElementToScroll, options);

let elements = document.querySelectorAll(".animation");

for (let element of elements) {
  observer.observe(element);
}
