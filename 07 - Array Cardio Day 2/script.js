const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?
const someOfAge = people.some(
  (person) => (person) => new Date().getFullYear() - person.year > 18
);
console.log(someOfAge);
const allOfAge = people.every(
  (person) => new Date().getFullYear() - person.year > 18
);
console.log(allOfAge);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const commentOfInterest = comments.find((comment) => comment.id === 823423);
console.table(commentOfInterest);
// Array.prototype.findIndex()
const indexOfInterest = comments.findIndex(
  (comment) => comment.id === commentOfInterest.id
);
const newComments = [
  ...comments.slice(0, indexOfInterest),
  ...comments.slice(indexOfInterest + 1),
];
console.table(newComments);
// also can be done like this
console.log(indexOfInterest);
comments.splice(indexOfInterest, 1);
console.table(comments);

// Find the comment with this ID
// delete the comment with the ID of 823423
