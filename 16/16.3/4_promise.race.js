const container = document.querySelector("#data-container");

const LIST = "https://jsonplaceholder.typicode.com/photos";

const getFastestLoadedPhoto = (ids) => {
  document.querySelector("#loader").hidden = false;
  Promise.race(ids.map((id) => fetch(`${LIST}/${id}`)))
    .then((response) => response.json())
    .then((photo) => {
      container.innerHTML =
        container.innerHTML +
        `<li class="photo-item">
          <img class="photo-item__image" src="${photo.url}">
          <h3 class="photo-item__title">
          ${photo.title}
          </h3>
        </li>`;
    })
    .catch((error) => {
      console.log(error.message);
    })
    .finally(() => {
      document.querySelector("#loader").hidden = true;
    });
};

getFastestLoadedPhoto([60, 12, 55]);
