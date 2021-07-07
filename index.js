//Loop works with Arrays, executing the function with different values in the Arrays

function theBeatlesPlay(musicians, instruments){
  var theyPlay = new Array()
  for (let i=0; i<4; i++){
    theyPlay.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return theyPlay;
}

function johnLennonFacts(facts){ //This function will accept one argument, an array of facts about John Lennon
  var johnLennonShouts = new Array();
  while (facts.length > 0 ){ //as long as the array length is bigger than 0
    johnLennonShouts.push(`${facts[0]}!!!`)
    facts.shift();
  }
  return johnLennonShouts;
}

function iLoveTheBeatles(n){ //accepts number as a parameter
  var loveThem = new Array() // The function should create a variable that stores an empty array.

  do{
    loveThem.push(`I love the Beatles!`)
    n++;//The loop should then increment the number passed in as a parameter.
  } while(n < 15 ) // The first check is when n = 2, As long as the parameter number is less than 15, then
//The condition of the loop should check to see that the parameter number is less than 15.
// It should contain a number of strings that represents the difference between the input number and 15.
return loveThem;//xxxxxxxx
}
