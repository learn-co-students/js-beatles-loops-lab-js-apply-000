// add solution here


function theBeatlesPlay(musicians, instruments) {
  //create array
  var arr = [];
  
  //loop through musicians and instruments
  for (var i = 0 ; i < musicians.length ; i++) {
    var string = musicians[i] + " plays " + instruments[i];
    arr.push(string);
  }
  
  //return strings
  return arr;
}


function johnLennonFacts(facts) {
  //copy facts arr 
  var copyFacts = facts.slice();
  //create new arr
  var arr = [];
  
  //copy strings and add !!!
  while(copyFacts.length > 0) {
    var string = copyFacts.shift();
    arr.push(string + "!!!");
  }
  
  //return emphatic strings
  return arr;
}


function iLoveTheBeatles(num) {
  //array for strings
  var arr = [];
  var love = "I love the Beatles!";
  
  do {
    arr.push(love);
    num++;
  } while (num < 15);
  
  return arr
  
}