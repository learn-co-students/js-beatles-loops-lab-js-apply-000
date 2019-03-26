function theBeatlesPlay(musicians, instruments){
  var array = [];
  let i = 0;
  for (i; i < musicians.length; i++){
    array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return array;
}
// 1. Defines the function 'theBeatlesPlay' that accepts two parameters, 'musicians' and 'instruments'
// 2. Defines the local variable 'array' WITHIN 'theBeatlesPlay'
      // Assigns 'array' an empty array
// 3. Defines the local variable 'i' WITHIN 'theBeatlesPlay'
      // Assigns 'i' the integer 0
// 4. Executes a for loop
      // Initializtion: confirms 'i' as the control variable
      // Condition: confirms that 'i' is less than the count of 'musicians.' If boolean true, the loop is executed.
      // Iteration: i++ increments the control variable 'i' after the loop is executed
      // Loop Body: as the loop iterates, adds a string concatanation to the end of the array 'array'
            // Musician (corresponding with the 'i' value in question) plays instrument (corresponding with the 'i' value in question)
//5. Returns the entirety of the array 'array'


const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
// Defines a constant global variable 'facts'
// Assigns 'facts' an array that includes four strings

function johnLennonFacts(facts){
  var array = [];
  let i = 0;
  while (i < facts.length){
    array.push(facts[i] + "!!!");i++;
  }
  return array;
}
// 1. Defines the function 'johnLennonFacts' that accepts one parameter, 'facts'
// 2. Defines the local variable 'array' WITHIN 'johnLennonFacts'
      // Assigns 'array' an empty array
// 3. Defines the local variable 'i' WITHIN 'johnLennonFacts'
      // Assigns 'i' the integer 0
// 4. Executes a while loop
      // Condition: confirms that 'i' is less than the count of 'facts.' If boolean true, the loop is executed.
      // Loop Body: as the loop iterates, adds a string concatanation to the end of the array 'array'
            // Fact (corresponding with the 'i' value in question)!!!
            // i++ increments 'i' to the next fact after the loop is executed
//5. Returns the entirety of the array 'array'

function iLoveTheBeatles(number){
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  }
  while (number < 15);
  return array;
}
// 1. Defines the function 'iLoveTheBeatles' that accepts one parameter, 'number'
// 2. Defines the local variable 'array' WITHIN 'iLoveTheBeatles'
      // Assigns 'array' an empty array
// 3. Executes a do-while loop
      // Condition: confirms that the entered number is less than 15. If boolean true, the loop is executed.
      // Loop Body: as the loop iterates, adds the string "I love the Beatles!" to the end of the array 'array'
            // number++ increments the entered number after the loop is executed
//5. Returns the entirety of the array 'array'
      //The number of times "I love the Beatles" is returned is the difference of 15 - the entered number