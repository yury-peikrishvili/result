const container = document.querySelector("#data-container");
const POSTS_URL = "https://jsonplaceholder.typicode.com/albums";
const renderAlbums = async () => {
  try {
    document.querySelector("#loader").hidden = false;
    const response = await fetch(POSTS_URL);
    if (!response.ok) {
      throw new Error("ошибка запроса");
    }
    const results = await response.json();
    results.forEach((element) => {
      container.innerHTML =
        container.innerHTML + `<li><a href="#">${element.title}</a></li>`;
    });
  } catch (error) {
    const container = document.querySelector("#data-container");
    container.textContent =
      "Произошла ошибка в получении данных об альбомах...";
    console.log("error", error);
  } finally {
    document.querySelector("#loader").hidden = true;
  }
};

renderAlbums();
