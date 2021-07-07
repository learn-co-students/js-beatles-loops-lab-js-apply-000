// add solution here
var musicians = ["John Lennon", "Ringo Star", "George Harrison", "Paul McCartney"]
var instruments = ["guitar", "drums", "guitar", "bass"]

function theBeatlesPlay(musicians, instruments) {
  var arr = [] // Empty Array
  for (var i = 0; i < musicians.length; i++){
    arr.push(musicians[i] + " plays " + instruments[i])
  }

  return arr // returns ARRAY that is populated by the concetenated strings from musicians and instruments arrays
}

// johnLennonFacts

const facts = [
  // "He was the last Beatle to learn to drive",
  // "He was never a vegetarian",
  // "He was a choir boy and boy scout",
  // "He hated the sound of his own voice"
  'foo',
  'bar',
];



function johnLennonFacts(facts) {
  var factsAppended = [] // Empty array
  var i = 0;

  while (i < facts.length) {
    factsAppended.push(facts[i] + "!!!");
    i++; // append facts with !!! and iterate by 1
  }

  return factsAppended;
}

/* Create a function iLoveTheBeatles which accepts a number as a parameter.
The body of the function should create a variable that stores an empty array.
Then, implement a do-while loop inside the function that adds "I love the Beatles!" to the empty array.
Then the loop should increment the number passed in as a parameter.
The condition of the loop should check to see that the parameter number is less than 15.
The function should return the array with the strings "I love the Beatles!" */

function iLoveTheBeatles(n){
    var arr = []; // Empty array
    do {
        arr.push("I love the Beatles!");
        n++; // Push = add to the array and n++ = increase by 1.
    }
    while (n < 15); // loop while n < 15
    return arr; // return the array
  }
