// Solution #01
function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  
  let i;
  
  for (i = 0; i<musicians.length; i++) {
    
    newArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArray;
}


// Solution #02
function johnLennonFacts(facts) {
  var newFacts = [];
  let i =0;
  
   while (facts.length > i) {
     newFacts.push(facts[i] + '!!!');
     
     i++;
   }
  return newFacts;
}

// Solution #03
function iLoveTheBeatles(num) {
  var counter = [];
  var i = 0;
  
  if ( num < 15 ) {
  
  do {
    counter.push("I love the Beatles!");
    i++;
  }
  while (i <= num);
  
  return counter;
  } else {
    return "I love the Beatles!"
  }
}


