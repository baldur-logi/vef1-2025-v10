import { createImageElement } from "../utils.js";

test("creates an image element with correct src", () => {
  const url = "https://example.com/image.jpg";
  const img = createImageElement(url);
  expect(img.tagName).toBe("IMG");
  expect(img.src).toBe(url);
});

test("image has alt text", () => {
  const img = createImageElement("https://example.com/img.jpg");
  expect(img.alt).toBe("Mynd af hundi eða ketti, valin af handahófi");
});