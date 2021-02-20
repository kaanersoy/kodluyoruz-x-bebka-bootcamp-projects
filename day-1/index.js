const oddNumbers = [1, 3, 5, 7, 9, 11, 13, 17];

// Filter:
const biggerThenSix = oddNumbers.filter((number) => number > 6);
console.table(biggerThenSix);

//Truthy🤞
if ({}) console.log("yey");

const students = [
  { name: "Quincy", grade: 96 },
  { name: "Jason", grade: 84 },
  { name: "Alexis", grade: 100 },
  { name: "Sam", grade: 65 },
  { name: "Katie", grade: 90 },
];

const yey = students.filter((student) => student.grade > 90);
console.log(yey);
