import "./style/main.scss";
import { fetchCat, fetchDog } from "./api.js";
import { createImageElement } from "./utils.js";

const catBtn = document.getElementById("catBtn");
const dogBtn = document.getElementById("dogBtn");
const floodBtn = document.getElementById("flood-btn");
const imageContainer = document.getElementById("image-container");

if (!imageContainer) {
  console.error("Myndasafn fannst ekki. Vinsamlegast athugaðu HTML id.");
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// kisutakki
catBtn?.addEventListener("click", async () => {
  if (!imageContainer) return;
  const url = await fetchCat();
  imageContainer.innerHTML = "";
  imageContainer.appendChild(createImageElement(url));
});

// Voffatakki
dogBtn?.addEventListener("click", async () => {
  if (!imageContainer) return;
  const url = await fetchDog();
  imageContainer.innerHTML = "";
  imageContainer.appendChild(createImageElement(url));
});

/* flóð takki */
floodBtn?.addEventListener("click", async () => {
  if (!imageContainer) return;
  imageContainer.innerHTML = "";

  const maxImages = 20;

  for (let i = 0; i < maxImages; i++) {
    // random bil á milli mynda
    const delay = 500 + Math.random() * 500;
    await sleep(delay);

    const url = Math.random() < 0.5 ? await fetchCat() : await fetchDog();
    imageContainer.appendChild(createImageElement(url));
  }

  console.log("Við fórum smá yfirum, best að refresha síðunni :)");
});
