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
