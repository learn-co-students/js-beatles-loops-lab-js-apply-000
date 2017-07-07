function theBeatlesPlay(musicians, instruments){
  var sentences = [];
  for (var i = 0; i < musicians.length; i++){ //from 0 to one less than the length of the arrays
    sentences.push(`${musicians[i]} plays ${instruments[i]}`); //combine the current index's musician and instrument into one sentence.
  }
  return sentences;
}

function johnLennonFacts(lennonFacts){
  var i = 0;
  while (i < lennonFacts.length){
    lennonFacts[i] = lennonFacts[i] + "!!!"; //add exclamation points to the end of each string in the array
    i++;
  }
  return lennonFacts;
}

function iLoveTheBeatles(n){
  var howMuchLove = []; //empty array
  do {
    howMuchLove.push("I love the Beatles!"); //add one string to the array
    n++;
  } while (n < 15); //re-run the loop as long as n is less than 15
  return howMuchLove;
}
