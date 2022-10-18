const userText =  prompt('Введите текст').trim()
const wordFromText =  prompt('Введите слово из текста').trim()

let indexOfWord = userText.indexOf(wordFromText)

let string = userText.substring(0,indexOfWord)

alert(`“Результат  ${string} `)

