function congrats(student) {
  if (student.grade > 80) {
    return "Congrats " + student.name + "! You have passsed.";
  } else {
    return "You failed. Try better next time";
  }
}

let student = {
  name: "Eli",
  age: 18,
  grade: 87
};

console.log(congrats(student));


function congratulateStudent(student) {
  if (student.grade > 80) {
      return 'Congratulations, ' + student.name + '! Keep up the good work!';
  } else {
      return 'Keep studying, ' + student.name + '. You can do better!';
  }
}

let student1 = {
  name: 'Alice',
  age: 18,
  grade: 75
};
console.log(congratulateStudent(student1));
