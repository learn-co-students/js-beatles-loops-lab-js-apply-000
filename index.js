// add solution here
//function with 2 arguments
function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array;
}

function johnLennonFacts(facts){
  //while loop to add !!! at the end of each facts
  var array = [];
  var i = 0;
  while (i < facts.length) {
    array.push(facts[i] + "!!!")
    i++
  }
  //return the array
  return array;
}

function iLoveTheBeatles(num){
  var array = [];
  //do-while loop to add "I love the Beatles!"
  //to the empty array
  do {
    array.push("I love the Beatles!")
    num++;
  } while (num < 15);

  //increment num

  //condition is num < 15

  //return array
  return array;
}
