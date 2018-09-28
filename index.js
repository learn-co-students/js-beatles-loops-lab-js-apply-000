
function theBeatlesPlay(musicians, instruments) {
  var x = [];
  for (var i = 0; i < musicians.length; i++) {
    x.push(musicians[i] + " plays " + instruments[i]);
  }
  return x; 
}


function johnLennonFacts(facts) {
  var x = [];

  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!";
  i++;
  console.log(facts);
  }
  x = facts;
  return x;
}




var f = 7;
function iLoveTheBeatles(f) {
  
  var x = [];

  var i = f;
  do {
    x.push("I love the Beatles!");
    f = f + i; 
    i++;
  } while (i < 15);
  
  return(x);

}



