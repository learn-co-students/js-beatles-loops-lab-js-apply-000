/*Directions: 
The first time through the loop, the body of the loop
should create a string using the first index of the musicians array and the
first index of the instruments array: `"John Lennon plays guitar"`. This string
should be added to the empty array you created. The loop should make the same
sentence for every member of the musicians array. The function should return the
array of new strings. */

// add solution here

//Create a function `theBeatlesPlay`, which accepts two parameters- an array of musicians and an array of instruments.

function theBeatlesPlay(musicians, instruments) {
  //create an empty array stored in a variable
  var emptyArray = [];
  // create for loop which loops over the array of musicians. set counter/i to 0(first index)
  for (var i = 0; i <= musicians.length - 1; i++) {
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
    [emptyArray[i]];
  }
  return emptyArray;
}

/*+ Create a function `johnLennonFacts`. This function will accept one argument, an
array of facts about John Lennon (note that it might not be exactly the
following facts):

```js
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];   
Use a while loop to loop over the facts array and add `"!!!"` to the end of
every fact. The function should return an array of strings with exclamation
points.*/

  function johnLennonFacts(factsArray) {
    let facts = [];
    let i = 0;
    while (i < factsArray.length) {
      facts.push(factsArray[i] + '!!!');
      i++;
    }
    return facts;
}


/* + Create a function `iLoveTheBeatles` which accepts a number as a parameter. The
body of the function should create a variable that stores an empty array. Then,
implement a do-while loop inside the function that adds `"I love the Beatles!"`
to the empty array. Then the loop should increment the number passed in as a
parameter. The condition of the loop should check to see that the parameter
number is less than `15`. The function should return the array with the strings
`"I love the Beatles!"`. */

function iLoveTheBeatles (num) {
  let emptyArray = [];
  do { 
    (emptyArray.push('I love the Beatles!'));
    num++;
  } while (num < 15);
  return emptyArray;
}






