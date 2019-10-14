function theBeatlesPlay(musicians, instruments) {
var resultArray = [];
  
  for (var i = 0; i < musicians.length; i++) {
    var musicianStr = musicians[i];
    var instrumentStr = instruments[i];
    resultArray.push (musicianStr + ' plays ' + instrumentStr);
  }
  
 return resultArray;  
}
theBeatlesPlay('John Lennon', 'guitar');


function johnLennonFacts(facts) {
 var factsArray = [];
  
 var i = 0;

  while (i < facts.length) {
  factsArray.push(facts[i] + '!!!');

  i++;
  }
  
 return factsArray;
}

// Create a function `iLoveTheBeatles` which accepts a number as a parameter. The
// body of the function should create a variable that stores an empty array. Then,
// implement a do-while loop inside the function that adds `"I love the Beatles!"`
// to the empty array. Then the loop should increment the number passed in as a
// parameter. The condition of the loop should check to see that the parameter
// number is less than `15`. The function should return the array with the strings
// `"I love the Beatles!"`.

function iLoveTheBeatles(number) {
  var resultArray = [];
  
  do {
  number ++;   
  resultArray.push('I love the Beatles!');  
  } while (number < 15);
  
 return resultArray;
}
