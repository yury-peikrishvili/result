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

function insertElement(target, id, completed, text) {
  let task = document.createElement("div");
  task.className = "task-item";
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
  button.dataset.deleteTaskId = id;
  button.textContent = `Удалить`;

  task.children[0].append(button);
  target.append(task);
}

const tasksList = document.querySelector(".tasks-list");
tasks.forEach((el) => insertElement(tasksList, el.id, el.completed, el.text));

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
