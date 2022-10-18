const container = document.querySelector("#data-container");
const LIST = "https://jsonplaceholder.typicode.com/users";
function getData(url) {
  document.querySelector("#loader").hidden = false;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка запроса");
      }
      return response.json();
    })
    .then((data) => {
      data.forEach((element) => {
        container.innerHTML =
          container.innerHTML + `<li><a href="#">${element.name}</a></li>`;
      });
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      document.querySelector("#loader").hidden = true;
    });
}

getData(LIST);
