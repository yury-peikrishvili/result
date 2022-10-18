const container = document.querySelector("#data-container");

const LIST = "https://jsonplaceholder.typicode.com/users";

function getUsersByIds(ids) {
  document.querySelector("#loader").hidden = false;
  Promise.all(
    ids.map((id) =>
      fetch(`${LIST}/${id}`).catch((error) => console.log(error.message))
    )
  )
    .then((responses) => {
      const results = responses.map((response) => response.json());
      return Promise.all(results);
    })
    .then((data) => {
      data.forEach((element) => {
        if (typeof element.name !== "undefined") {
          container.innerHTML =
            container.innerHTML + `<li><a href="#">${element.name}</a></li>`;
        } else {
          throw new Error("Ошибка данных");
        }
      });
    })
    .catch((error) => {
      console.log(error.message);
    })
    .finally(() => {
      document.querySelector("#loader").hidden = true;
    });
}

getUsersByIds([5, 6, 2, 1, 100]);
