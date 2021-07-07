function theBeatlesPlay(musicians, instruments) {
  let arr = []; 
  for (let index = 0; index < musicians.length; index++) {
    arr.push(`${musicians[index]} plays ${instruments[index]}`);
  }
  
  return arr;
}

// create a function johnLennonFacts it accepts one argument, an array of facts
function johnLennonFacts(facts) {
  let lennonFacts = [];
  
  // use a while loop over the facts array and add "!!!" to the end of every fact.
  let index = 0;
  while (facts[index]) {
    lennonFacts.push(`${facts[index]}!!!`);
    index++;
  }

  // return an array of strings with exclamation points.
  return lennonFacts;
}

// create a function iLoveTheBeatles which accepts a number as a parameter
function iLoveTheBeatles(num) {
  // create a variable that stores an empty array.
  let arr = [];

  // implement a do-while loop inside the function that adds "I love the Beatles!" to the empty array.
  // the loop should increment the number passed as a parameter.
  // the condition of the loop should check that the parameter number is less than 15
  do {
    arr.push("I love the Beatles!");
    num++;  
  } while (num < 15);

  // return the array of strings.
  return arr;
}
