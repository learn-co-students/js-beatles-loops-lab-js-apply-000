const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay (musicians, instruments) {  
  var phrase = [];
  for (var x = 0 ;  x < musicians.length ; x++) {
     phrase.push(musicians[x] + " plays " + instruments[x]);
  }
  return phrase;
}

// Beatles Loops johnLennonFacts
// returns an array of strings with exclamation points:                                                      
function johnLennonFacts(anything) {
  var i = 0;
  var text = [];
  while (anything[i]) {
    text.push(anything[i] + "!!!");
    i++;
  }
  return text;
}

function iLoveTheBeatles(number) {
  /*
  The body of the function should create a variable that stores an empty array. 
  
  Then, implement a do-while loop inside the function that adds "I love the Beatles!" to the empty array.
  
  Then the loop should increment the number passed in as a parameter. The condition of the loop should check to see that the parameter number is less than 15.
  
  The function should return the array with the strings "I love the Beatles!".
  */
  var new = [];
  
  
}
