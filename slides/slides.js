const deck = document.querySelector(".deck");
const slides = [...document.querySelectorAll(".slide")];
const progress = document.querySelector(".progress");
const canvas = document.querySelector(".bg");
const ctx = canvas?.getContext("2d");
let index = 0;
let raf = 0;

function sizeCanvas() {
  if (!canvas) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.floor(innerWidth * dpr);
  canvas.height = Math.floor(innerHeight * dpr);
  canvas.style.width = `${innerWidth}px`;
  canvas.style.height = `${innerHeight}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function draw(time = 0) {
  if (!ctx) return;
  const w = innerWidth;
  const h = innerHeight;
  ctx.clearRect(0, 0, w, h);
  ctx.lineWidth = 1;
  for (let band = 0; band < 18; band += 1) {
    ctx.beginPath();
    const yBase = (band / 17) * h;
    for (let x = -80; x <= w + 80; x += 18) {
      const y =
        yBase +
        Math.sin(x * 0.006 + time * 0.00032 + band * 0.72) * 24 +
        Math.cos(x * 0.011 - time * 0.00021 + band) * 14;
      if (x === -80) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = `rgba(241,243,245,${0.09 - band * 0.002})`;
    ctx.stroke();
  }
  raf = requestAnimationFrame(draw);
}

function show(next) {
  index = Math.max(0, Math.min(slides.length - 1, next));
  deck.style.transform = `translateX(${-index * 100}vw)`;
  slides.forEach((slide, i) => slide.classList.toggle("is-active", i === index));
  document.body.classList.toggle("light-bg", slides[index].classList.contains("light"));
  progress.style.width = `${((index + 1) / slides.length) * 100}%`;
  history.replaceState(null, "", `#${index + 1}`);
}

function fromHash() {
  const n = Number(location.hash.replace("#", ""));
  if (Number.isFinite(n) && n > 0) show(n - 1);
}

document.addEventListener("keydown", (event) => {
  if (["ArrowRight", " ", "PageDown", "ArrowDown"].includes(event.key)) {
    event.preventDefault();
    show(index + 1);
  }
  if (["ArrowLeft", "PageUp", "ArrowUp"].includes(event.key)) {
    event.preventDefault();
    show(index - 1);
  }
  if (event.key === "Home") show(0);
  if (event.key === "End") show(slides.length - 1);
  if (event.key.toLowerCase() === "f") document.documentElement.requestFullscreen?.();
});

let touchX = 0;
document.addEventListener("touchstart", (event) => {
  touchX = event.touches[0].clientX;
}, { passive: true });

document.addEventListener("touchend", (event) => {
  const dx = event.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
}, { passive: true });

window.addEventListener("resize", sizeCanvas);
window.addEventListener("hashchange", fromHash);

sizeCanvas();
draw();
fromHash();
show(index);

window.addEventListener("beforeunload", () => cancelAnimationFrame(raf));
