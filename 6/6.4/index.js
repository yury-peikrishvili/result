alert('for loop')
for (let z = 0; z < 3; z += 1) {
    let newStudent = prompt('Введите имя нового студента!');
    if (newStudent) {
      newStudent = newStudent.trim();
      alert(`Добро пожаловать, ${newStudent}!`)
    }
  }

alert('while loop')

let newStudenti

let i = 0
while(i<3){
newStudenti = prompt('Введите имя нового студента!');
    if (newStudenti) {
        newStudenti = newStudenti.trim();
        alert(`Добро пожаловать, ${newStudenti}!`)
    }
    i++
}

alert('do while loop')
let newStudentj
let j = 0
do {
    j++;
    newStudentj = prompt('Введите имя нового студента!');
    if (newStudentj) {
        newStudentj = newStudentj.trim();
        alert(`Добро пожаловать, ${newStudentj}!`)
    }
  } while (j < 3);


