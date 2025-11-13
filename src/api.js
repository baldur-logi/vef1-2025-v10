export function fetchCat() {
  return fetch("https://api.thecatapi.com/v1/images/search")
    .then(res => res.json())
    .then(data => data[0].url);
}

export function fetchDog() {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => data.message);
}