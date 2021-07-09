// create a function theBeatlesPlay that takes two parameters (musicians and instruments), the function creates an empty array myArray and loops over the array musicians for as long as the counter variable i is shorter than the length of the musicians array and pushes the following string to the empty array `musicians[i] plays ${instruments[i]}`
function theBeatlesPlay(musicians, instruments) {
  var myArray = [];
  for (var i = 0; i < musicians.length; i++) {
    myArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return myArray
};


const lennonFacts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

// creates a function johnLennonFacts that accepts an array as a paremeter, the code block creates an empty array lennonResult and a counter variable i assigned to equal to 0; the while loop runs  as long as i < the length of the facts array accepted as the parameter. The loop body adds "!!!" to the fact[i] element and pushes the string to the lennonResult array and incremenets counter variable i by 1. The function then returns the array lennonResult
function johnLennonFacts(facts) {
  var lennonResult = [];
  var i = 0;
  while (i < facts.length) {
    lennonResult.push(facts[i] + "!!!")
    i++;
  }
  return lennonResult;
};

// creates a function iLoveBeatles that accepts n as a parameter. The function creates an empty array beatlesArray and a do while loop that pushes the string "I love the Beatles!" to the beatlesArray and increments n after each iteration. The loop runs while n < 15. Finally the function retursn the beatlesArray
function iLoveTheBeatles(n) {
  var beatlesArray = [];
  do {
    beatlesArray.push("I love the Beatles!");
    n++
  } while (n < 15);
  return beatlesArray;
};