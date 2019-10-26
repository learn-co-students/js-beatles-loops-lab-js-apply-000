// add solution here

/*
Defined "musicians" and "instruments" as arrays to serve as my arguments in theBeatlesPlay function.
Created theBeatlesPlay function using musicians and instruments as parameters.
Declared band and defined it as an empty array as collector for returned values.
Created for loop by adding an initializer to start at the beginning of my arrays, a condition to loop until the it has reached the end of the arrays using length method, and increment by one each time.
Used .push method to create concatenated string within band with the correspodning arguments of each loop iteration. 
Return array that has been collected in band.
*/
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var band = []
  for (var i=0; i<musicians.length; i++) {
    band.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return band;
}

/*
Same logic as above for loop. While loop would continue to run until condition is false, where for loop runs for a defined number of iterations. In these scenarios, a for loop could be used for both (or vise versa).
*/
 const facts = [ 
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"];

function johnLennonFacts(facts) {
  var nextFact = [];
  let i = 0;
  while (i<facts.length) {
    nextFact.push(facts[i] + "!!!");
    i++;
  }
  return nextFact;
}

/*
Just like while loop, except the do-while loop executes at least once before the while condition is tested. 
*/

var iLoveTheBeatles = function(num) {
  var heyJude = [];
  do {
    heyJude.push("I love the Beatles!");
    num++;
  }
  while (num < 15);
  return heyJude
}
  

