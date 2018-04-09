// Beatles Loops Lab
// Laura Nadolski
// 4/8/18

// theBeatlesPlay() accepts two arrays as parameters: one of
// musicians and one of instruments. It produces a new array
// filled with strings that are each a combination of the various
// musicians and instruments in the parameter-arrays.
function theBeatlesPlay(musicians, instruments) {
 var newarray = [];
 for (var i = 0; i < musicians.length; i++) {
   newarray.push(`${musicians[i]} plays ${instruments[i]}`);
 }
 return newarray; 
}

// johnLennonFacts() accepts an array of facts and loops over
// said array, adding "!!!" to each one.
function johnLennonFacts(facts) {
  var i = 0;
  var factsarray = [];
  while (i < facts.length) {
    factsarray.push(`${facts[i]}!!!`);
    i++;
  }
  return factsarray;
}

// iLoveTheBeatles accepts a number as a parameter. If the number
// is greater than 15, it prints out "I love the Beatles!" once.
// If it's less than 15, "I love the Beatles!" is printed out
// number + 1 times.

function iLoveTheBeatles(number) {
  var lovearray = [];
  var i = 0;
  do {
    lovearray.push(`I love the Beatles!`);
    i++;
  }
  while (i < number + 1 && number < 15);
  return lovearray;
}