function theBeatlesPlay(musicians, instruments){
// 1. Defines the function 'theBeatlesPlay' that will return an array of strings containing what instrument each musician plays
      // 'theBeatlesPlay' accepts two parameters, 'musicians' and 'instruments'
      
  var array = [];
 // 2. Defines the local variable 'array' WITHIN 'theBeatlesPlay'
      // Assigns 'array' an empty array
 
  
  for (let i = 0; i < musicians.length; i++){
    array.push(musicians[i] + ' plays ' + instruments[i]);
  }
// 3. Executes a for loop
      // Initializtion: confirms 'i' as the control variable and assigns it the integer 0
      // Condition: confirms that 'i' is less than the count of 'musicians.' If boolean true, the loop is executed.
      // Iteration: i++ increments the control variable 'i' after the loop is executed
      // Loop Body: as the loop iterates, adds a string concatanation to the end of the array 'array'
            // Musician (corresponding with the 'i' value in question) plays instrument (corresponding with the 'i' value in question)  
  
  return array;
}
// 4. Returns the entirety of the array 'array'


const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
// 1. Defines a constant global variable 'facts'
      // Assigns 'facts' an array that includes four strings

function johnLennonFacts(facts){
  // 1. Defines the function 'johnLennonFacts' that will return a string of facts with exclamation points
      // 'johnLennonFacts' accepts one parameter, 'facts'
  
  var array = [];
  // 2. Defines the local variable 'array' WITHIN 'johnLennonFacts'
      // Assigns 'array' an empty array
  
  let i = 0;
  // 3. Defines the local variable 'i' WITHIN 'johnLennonFacts'
      // Assigns 'i' the integer 0
  
  while (i < facts.length){
    array.push(facts[i] + "!!!");i++;
  }
  // 4. Executes a while loop
      // Condition: confirms that 'i' is less than the count of 'facts.' If boolean true, the loop is executed.
      // Loop Body: as the loop iterates, it adds a string concatanation to the end of 'array':
            // Fact (corresponding with the 'i' value in question)
            // the string '!!!''
        // i++ increments 'i' to the next fact after the loop is executed
  
  return array;
}
// 5. Returns the entirety of the array 'array'
      // A string of facts with exclamation points


function iLoveTheBeatles(number){
  // 1. Defines the function 'iLoveTheBeatles' that repeatedly returns the string 'I love the Beatles!'
      // 'iLoveTheBeatles' accepts one parameter, 'number'
  
  var array = [];
  // 2. Defines the local variable 'array' WITHIN 'iLoveTheBeatles'
      // Assigns 'array' an empty array
  
  do {
    array.push("I love the Beatles!");
    number++;
  }
  while (number < 15);
  // 3. Executes a do-while loop
      // While Condition: confirms that the entered number is less than 15. If boolean true, the loop is executed.
      // Do Loop Body: as the loop iterates, adds the string "I love the Beatles!" to the end of the array 'array'
            // number++ increments the entered number after the loop is executed
  
  return array;
}
//5. Returns the entirety of the array 'array'
      //The number of times "I love the Beatles" is returned is the difference of 15 - the entered number