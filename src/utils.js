export function createImageElement(url) {
  const img = document.createElement("img");
  img.src = url;
  img.alt = "Mynd af hundi eða ketti, valin af handahófi";
  img.setAttribute("aria-label", "Handahófskennd mynd af kötti eða hundi");
  return img;
}