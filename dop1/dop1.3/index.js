let pass = prompt('Введите пароль')

var reg = new RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{3,30}$/g);

if (reg.test(pass)) {
  alert ('Пароль валидный. Добро пожаловать в аккаунт!')
} else {
  alert('Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.')
}



