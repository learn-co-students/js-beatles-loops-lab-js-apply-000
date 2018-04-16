//theBeatlesPlay function create an empty array. For loop over array of musicians. Create strings in the loop for each iteration and add to new array.
//Parameters: array of musicians, array of instruments
//returns the new array with the new strings formed in the for loop

function theBeatlesPlay (musicians, instruments) {
  
  //new array that will hold new strings
  var outputArray = [];
  
  //for loop iterates over the arrays to assign each musician an instrument
  for (var i = 0; i < musicians.length; i++) {
    outputArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return outputArray;
}


//johnLennonFacts function adds "!!!" to the end of each fact passed in.
//Parameters: array of facts about John Lennon
//Return: array of strings with exclamations points

function johnLennonFacts (facts) {
  
  //create new array for new strings
  var factsOutput = [];
  var i = 0;
  
  //while loop until there are no more facts to add to new array
  while (facts.length > i) {
    factsOutput.push(facts[i] + "!!!");
    i++;
  }
  
  //return the new array with the exclamation points
  return factsOutput;
  
}


//iLoveTheBeatles function will add the string to the array based on the value of num. Create new array and use do-while loop to fill the array, incrememnted based on num passed in as parameter.
//Do-while loop conidition checks if parameter is less than 15.
//Parameter: num
//Return: array with the strings "I love the Beatles!"

function iLoveTheBeatles (num) {
  
  var loveOutput = [];
  
  do {  
    loveOutput.push("I love the Beatles!");
    //increment the num passed in as a parameter
    num++;
  } while (num < 15);
  
  return loveOutput;
}









