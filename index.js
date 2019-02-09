// add solution here
function theBeatlesPlay(musicians,instruments) {
  var emptyArray = [];
  for (var i = 0; i < 4; i++) {
   emptyArray.push(musicians[i] + " plays " + instruments[i]);
   
  }
   return emptyArray;
}

function johnLennonFacts(facts) {
  	
	var factsArray = [];
	var i=0;
  while (i<facts.length) {
    factsArray.push(facts[i] + "!!!");
     i++;
  }
  return factsArray;
}

function iLoveTheBeatles(number) {
  var emptyArray = [];
  //var i =0;
  do {
    emptyArray.push("I love the Beatles!");
	  //i++;
	  number++;
  } while (number < 15);
  //while (i < number);
  return emptyArray;	
}