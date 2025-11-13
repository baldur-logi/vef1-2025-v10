export function createImageElement(url) {
  const img = document.createElement("img");
  img.src = url;
  img.alt = "Handahófskennd dýramynd";
  img.setAttribute("aria-label", "Handahófskennd mynd af kötti eða hundi");
  return img;
}