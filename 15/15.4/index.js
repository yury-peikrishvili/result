let theme = "light"; //dark

const tasks = [
  {
    id: "1138465078061",
    completed: false,
    text: "Посмотреть новый урок по JavaScript",
  },
  {
    id: "1138465078062",
    completed: false,
    text: "Выполнить тест после урока",
  },
  {
    id: "1138465078063",
    completed: false,
    text: "Выполнить ДЗ после урока",
  },
];

const modalWindow = document.createElement("div");
modalWindow.innerHTML = `
<div class="delete-modal">
    <h3 class="delete-modal__question">
        Вы действительно хотите удалить эту задачу?
    </h3>
    <div class="delete-modal__buttons">
        <button class="delete-modal__button delete-modal__cancel-button">
            Отмена
        </button>
        <button class="delete-modal__button delete-modal__confirm-button">
            Удалить
        </button>
    </div>
</div>
`;
modalWindow.className = "modal-overlay modal-overlay_hidden";
document.querySelector("Body").append(modalWindow);

function insertElement(target, id, completed, text) {
  let task = document.createElement("div");
  task.className = "task-item";
  theme === "light"?task.style.backgroundColor = "initial":task.style.color = "#ffffff";
  task.dataset.taskId = id;
  task.innerHTML = `<div class="task-item__main-container">
         <div class="task-item__main-content"></div></div>`;

  let form = document.createElement("form");
  form.className = "checkbox-form";

  let label = document.createElement("label");
  label.htmlFor = id;

  let input = document.createElement("input");
  input.className = "checkbox-form__checkbox";
  input.type = "checkbox";
  input.id = id;

  form.append(input);
  form.append(label);
  task.children[0].children[0].append(form);

  let span = document.createElement("span");
  span.className = "task-item__text";
  span.textContent = text;

  task.children[0].children[0].append(span);

  let button = document.createElement("button");
  button.className = "task-item__delete-button default-button delete-button";
  theme === "light"?button.style.border = "none":button.style.border = "1px solid #ffffff";
  button.dataset.deleteTaskId = id;
  button.textContent = `Удалить`;

  task.children[0].append(button);
  target.append(task);
}

function removeTask(taskId, taskList) {
  const taskIndx = taskList.findIndex((el) => el.id == taskId);
  taskList.splice(taskIndx, 1);
  const taskItem = document.querySelectorAll(".task-item");
  taskItem.forEach((el) => {
    if (el.getAttribute("data-task-id") == taskId) {
      el.remove();
    }
  });
}

let taskId = "";
const tasksList = document.querySelector(".tasks-list");
tasks.forEach((el) => insertElement(tasksList, el.id, el.completed, el.text));

const cancelButton = modalWindow.querySelector(".delete-modal__cancel-button");
cancelButton.addEventListener("click", () =>
  modalWindow.classList.toggle("modal-overlay_hidden")
);

const confirmButton = modalWindow.querySelector(
  ".delete-modal__confirm-button"
);
confirmButton.addEventListener("click", (event) => {
  removeTask(taskId, tasks);
  modalWindow.classList.toggle("modal-overlay_hidden");
  if (document.querySelector(".error-message-block")) {
    document.querySelector(".error-message-block").remove();
  }
});

tasksList.addEventListener("click", (event) => {
  if (event.target.classList.contains('task-item__delete-button')){
    taskId = event.target.getAttribute("data-delete-task-id");
    modalWindow.classList.toggle("modal-overlay_hidden");
  }
});

const taskBlock = document.querySelector(".create-task-block");

taskBlock.addEventListener("submit", (event) => {
  event.preventDefault();

  if (document.querySelector(".error-message-block")) {
    document.querySelector(".error-message-block").remove();
  }

  const errorBlock = document.createElement("span");
  errorBlock.className = "error-message-block";

  const inputText = document.querySelector(".create-task-block__input").value.trim();
  if (!inputText) {
    errorBlock.textContent = "Название задачи не должно быть пустым";
    document.querySelector(".create-task-block").append(errorBlock);
  } else if (tasks.find((el) => el.text == inputText)) {
    errorBlock.textContent = "Задача с таким названием уже существует.";
    document.querySelector(".create-task-block").append(errorBlock);
  } else {
    const newTask = {
      id: Date.now().toString(),
      completed: false,
      text: inputText,
    };
    tasks.push(newTask);
    insertElement(tasksList, newTask.id, newTask.completed, newTask.text);
  }
});


document.addEventListener("keyup", (event) => {
  const taskItem = document.querySelectorAll(".task-item");
  const buttons = document.querySelectorAll("button");
  console.log(event + event.key + ' code ' + event.code)
  if (event.key == "Tab") {
    event.preventDefault();
    if (theme === "light") {
      document.querySelector("body").style.backgroundColor = "#24292E";
      taskItem.forEach((el) => (el.style.color = "#ffffff"));
      buttons.forEach((el) => (el.style.border = "1px solid #ffffff"));
      theme = "dark";
    } else {
      document.querySelector("body").style.backgroundColor = "initial";
      taskItem.forEach((el) => (el.style.color = "initial"));
      buttons.forEach((el) => (el.style.border = "none"));
      theme = "light";
    }
  }
});
