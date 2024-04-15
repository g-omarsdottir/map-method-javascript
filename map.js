  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 * node map.js
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num * 2);
}

console.log(results);


// Using map()
  // A valid but not a realistic example, because no one would use it.
const multByTwo = function (num) {
  return num * 2;
}

const mapResults = nums.map(multByTwo);

console.log(mapResults);

// Simplified w/ map()
const multByTwoSimplified = nums.map(function (num) {return num* 2});

console.log("multByTwoSimplified: ", multByTwoSimplified);


// Simplfied w/ map() + arrow function
const multByTwoArrow = nums.map(num => num*2);
console.log("multByTwoArrow: ", multByTwoArrow);


// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentsWithIds = students.map(student => [student.name, student.id]);
console.log(studentsWithIds);