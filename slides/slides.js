const slides = [...document.querySelectorAll(".slide")];
const progress = document.querySelector(".progress");
let index = 0;

function show(next) {
  index = Math.max(0, Math.min(slides.length - 1, next));
  slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
  progress.style.width = `${((index + 1) / slides.length) * 100}%`;
  history.replaceState(null, "", `#${index + 1}`);
}

function fromHash() {
  const n = Number(location.hash.replace("#", ""));
  if (Number.isFinite(n) && n > 0) show(n - 1);
}

document.addEventListener("keydown", (event) => {
  if (["ArrowRight", " ", "PageDown"].includes(event.key)) {
    event.preventDefault();
    show(index + 1);
  }
  if (["ArrowLeft", "PageUp"].includes(event.key)) {
    event.preventDefault();
    show(index - 1);
  }
  if (event.key === "Home") show(0);
  if (event.key === "End") show(slides.length - 1);
  if (event.key.toLowerCase() === "f") document.documentElement.requestFullscreen?.();
});

window.addEventListener("hashchange", fromHash);
fromHash();
show(index);
