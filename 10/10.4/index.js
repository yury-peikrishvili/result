function giveJobToStudent(student , jobName ){
    let newStudent = {...student, job: jobName}
    alert(`Поздравляем! У студента ${newStudent.fullName} появилась новая работа! Теперь он ${newStudent.job}`)
    return newStudent
}

//Поздравляем! У студента fullName появилась новая работа! Теперь он jobName

const student = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
  }
  
  const updatedStudent = giveJobToStudent(student, 'веб-разработчик');
  console.log(updatedStudent)
  /*
  updatedStudent = {
      fullName: 'Максим',
      experienceInMonths: 12,
      stack: ['HTML', 'CSS', 'JavaScript', 'React'],
      job: 'веб-разработчик',
  }
  */