/**
 * Any of the examples below will accomplish the
 * same task: reversing a string.
 * 
 * Which of these examples is best? Why?
 * Note that there is no "correct" answer.
 */
function reverseString(str) {
  const strArray = str.split("");
  const revArray = strArray.reverse();
  const revString = revArray.join("");
  return revString;
}

function reverseString2(str) {
  return str.split("").reverse().join("");
}

function reverseString3(str) {
  let revString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revString += str[i];
  }
  return revString;
}

function reverseString4(str) {
  if (str === "") return "";
  else return reverseString4(str.substr(1)) + str.charAt(0);
}

function reverseString5(str) {
  return (str === "") ? "" : reverseString5(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("!dlroW olleH"))
console.log(reverseString2("!dlroW olleH"))
console.log(reverseString3("!dlroW olleH"))
console.log(reverseString4("!dlroW olleH"))
console.log(reverseString5("!dlroW olleH"))


//*
//[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, 
//{ id: "7", name: "Bilbo", occupation: "None", age: "111" }]
//Use callback functions alongside Array methods to accomplish the following:
//Sort the array by age.
//Filter the array to remove entries with an age greater than 50.
//Map the array to change the “occupation” key to “job” and increment every age by 1.
//Use the reduce method to calculate the sum of the ages.
//Then use the result to calculate the average age.

const people = [
  {id: "42", name: "Bruce", occupation: "Knight", age: "41"},

  {id: "48", name: "Barry", occupation: "Runner", age: "25"},

  {id: "57", name: "Bob", occupation: "Fry Cook", age: "19"},

  {id: "63", name: "Blaine", occupation: "Quiz Master", age: "58"},

  {id: "7", name: "Bilbo", occupation: "None", age: "111"},

]

;

const sortAge = people.sort((a,b) => Number(a.age) - Number(b.age));

const filterAge = sortAge.filter(person => Number(person.age) <= 50);

const mapArray = filterAge.map(person => ({ 

  id: person.id,
  name: person.name,
  job: person.occupation,
  age: Number(person.age) + 1
}));

let ageTotal = mapArray.reduce((sum, person) => sum + person.age, 0);

const averageAge = mapArray.length > 0 (total/mapArray.length , 0);

///calulations

console.log("Sorted by Age:", sortAge);
console.log("Filtered by Age <= 50:", filterAge);
console.log("Mapped Array:", mapArray);
console.log("Total Age:", ageTotal);
console.log("Average Age:", averageAge);




////It is important to remember that when working with objects in JavaScript, we can either pass those objects into functions by value or by reference. 
//This important distinction changes the way that functions behave, and can have large impacts on the way a program executes.
//For this section, develop functions that accomplish the following:
//Take an object and increment its age field.
//Take an object, make a copy, and increment the age field of the copy. Return the copy.
//For each of the functions above, if the object does not yet contain an age field, create one and set it to 0. Also, add (or modify, as appropriate) an updated_at field that stores a Date object with the current time.
//Thought experiment: since the Date object is an object, what would happen if we modified it in the copy of the object created in the second function using setTime() or another method? How could we circumvent potentially undesired behavior?

function incrementAge(object){

  if(!object.age) object.age = 0;
  object.age++;
  object.updated = new Date ();
}
;

function makeACopy (object) {
  const copy = {...object};
  copy.age++;
  copy.updated = new Date();
  return copy;
}
