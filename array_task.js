// Task
// Create an array variable named as students and assign atleast 5-10 student informations as an object to the array
// Use different array functions for insertion (.push(), .unshit(), .splice() )
// Each student information must contain : name, email, address and scoreObtained (should be less than 500)

let studentsInfo = [];

let studentOne = {
  name: "Gray1",
  email: "gray@gmail.com",
  address: "Osaka",
  scoreObtained: 300,
};
let studentTwo = {
  name: "Alice2",
  email: "alice@gmail.com",
  address: "Saitama",
  scoreObtained:320,
};
let studentThree = {
  name: "Gusion3",
  email: "gusion@gmail.com",
  address: "Dawn",
  scoreObtained: 200 ,
};
let studentFour = {
  name: "John4",
  email: "john@gmail.com",
  address: "NewYork",
  scoreObtained: 450,
};
let studentFive = {
  name: "Red5",
  email: "red@gmail.com",
  address: "Hope",
  scoreObtained: 250,
};



studentsInfo.push(studentOne)
studentsInfo.push(studentTwo)
studentsInfo.unshift(studentThree)
studentsInfo.push(studentFour)
studentsInfo.push(studentFive)
studentsInfo.splice(0,1)
studentsInfo.splice(2,0,studentThree)
studentsInfo.splice(3,1)
console.log(studentsInfo);


