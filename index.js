
function theBeatlesPlay (musicians,instruments) {
  // The body of the function should create an empty array stored in a variable.
  // The function should also contain a for loop which loops over the array of musicians.
  // The first time through the loop, the body of the loop should create a string using
  // The first index of the musicians array and the first index of the instruments array: "John Lennon plays guitar"
  // This string should be added to the empty array you created.
  // The loop should make the same sentence for every member of the musicians array.
  // The function should return the array of new strings.
  var arr = [];
  for(var index = 0; index < musicians.length; index++){
    arr.push(`${musicians[index]} plays ${instruments[index]}`)
  }
  return arr;
}



// Build a while loop
function johnLennonFacts (facts) {
  // This function will accept one argument, an array of facts about John Lennon
  // Use a while loop to loop over the facts array and add "!!!" to the end of every fact.
  // The function should return an array of strings with exclamation points.
  var index = 0;
  var shout = [];
  while (index < facts.length) {
    var final = facts[index] + '!!!';
    shout.push(final);
    index = index+1;
  }
  return shout;
}

// Build a do-while loop
function iLoveTheBeatles(num){

  var index = 0;
  var string = "I love the Beatles!";
  var beatlesArr = [string];
  if (num < 15) {
    do {
      // Then, implement a do-while loop inside the function that adds "I love the Beatles!" to the empty array.
      // Then the loop should increment the number passed in as a parameter.
      // The condition of the loop should check to see that the parameter number is less than 15.
      // The function should return the array with the strings "I love the Beatles!".
      beatlesArr.push(string);
      console.log(beatlesArr);
      index = index+1;
    } while(index < num);
  }
  return beatlesArr;

}
