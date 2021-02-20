// const oddNumbers = [1, 3, 5, 7, 9, 11, 13, 17];

// // Filter:
// const biggerThenSix = oddNumbers.filter((number) => number > 6);
// console.table(biggerThenSix);

// //Truthy🤞
// if ({}) console.log('yey');

// // Usage of filters
// const students = [
//   { name: 'Quincy', grade: 96 },
//   { name: 'Jason', grade: 84 },
//   { name: 'Alexis', grade: 100 },
//   { name: 'Sam', grade: 65 },
//   { name: 'Katie', grade: 90 },
// ];

// const yey = students.filter((student) => student.grade > 90);
// console.log(yey);

// //Filter with object filltering

// const players = [
//   { name: 'Lebron', rating: 98, team: 'Lakers' },
//   { name: '', rating: 98, team: 'Lakers' },
//   { name: '', rating: 98 },
//   { name: '', rating: 98 },
// ];

// const team = players.filter((player) => player.hasOwnProperty('team'));
// console.log(team);

// //Reduce :
// //With nums
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sum = numbers.reduce((acc, value) => acc + value, 0);
// console.log(sum);

// // Reduce with array of objects
// const shopItems = [
//   { description: 'Eggs (Dosen)', quantity: 0.5, total: 3 },
//   { description: 'Chese', quantity: 0.5, total: 3 },
//   { description: 'Butter', quantity: 0.5, total: 3 },
// ];

// const total = shopItems.reduce((acc, value) => acc + value.total, 0);

// console.log(total);

const myDates = ['2019/06/01', ' 2018/06/01', '2018/06/01'];

const biggestDate = myDates.reduce((acc, value) =>
  acc < value ? (acc = value) : acc
);

console.log(biggestDate);
