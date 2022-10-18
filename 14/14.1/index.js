function createForm() {
  const bodyTag = document.querySelector("body");
  const formTag = document.createElement("form");
  formTag.className = "create-user-form";
  formTag.innerHTML = `<label>
      Имя
      <input type="text" name="userName" placeholder="Введите ваше имя">
  </label>
  <label>
      Пароль
      <input type="password" name="password" placeholder="Придумайте Пароль">
  </label>
  <button type="submit">
      Подтвердить
  </button>`;
  bodyTag.append(formTag);
}

createForm();
