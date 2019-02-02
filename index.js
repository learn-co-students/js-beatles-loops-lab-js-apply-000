// a function that takes players and their instruments as parameters
function theBeatlesPlay(players, instruments){
// an empty string which will contain a concatenation of the two values
var everyPlayer = [];  
  // running a for loop between 0 and the length of of the "players" array
  for(var i = 0; i < players.length ; i++){
    // with each pass through the array you add a concatenated item 
    // each item assigns a player to an instrument 
      everyPlayer.push(players[i] + " plays " + instruments[i]);
  }
  // we return the new no longer empty array
  return everyPlayer;
}

// a function that takes 1 argument 
function johnLennonFacts(facts) {
  // the array of facts on John Lennon 

  // we create a new array to add the concatenated items to.
  var crazyFacts = [];
  // initialize the while loop
  var i = 0;
  // while i is less than the length of facts 
  while(i < facts.length){
    // add the concatenated items to the "crazyFacts" array
    crazyFacts.push(facts[i] + "!!!");
    i++;
  }
  // return the new array
  return crazyFacts;
}

// a function that takes a number as an argument
function iLoveTheBeatles(n) {
  // initialize an empty array
  const emptyArr = [];
  //start the do-while loop
  do {
    // adds "I love the beatles!"
    emptyArr.push("I love the Beatles!");
    // increases the parameter number by 1
    n++;
    // tests if the parameter is less than 15 
} while(n < 15);
// returns the not so empty array
return emptyArr;
  
}