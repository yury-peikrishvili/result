let q1 = Number(prompt('Сколько будет 2 + 2?').trim())
let q2 = Number(prompt('Сколько будет 2 * 2?').trim())
let q3 = Number(prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?').trim())
let q4 = Number(prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?').trim())
let q5 = Number(prompt('Сколько будет 2 + 2 * 2?').trim())

let correctAnswers = 0;
let incorrectAnswers = 0;

q1 === 2 + 2? correctAnswers++ : incorrectAnswers++
q2 === 2 * 2? correctAnswers++ : incorrectAnswers++
q3 === 5-3-1? correctAnswers++ : incorrectAnswers++
q4 === 10-2-1+5? correctAnswers++ : incorrectAnswers++
q5 === 2 + 2 * 2? correctAnswers++ : incorrectAnswers++

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`) 