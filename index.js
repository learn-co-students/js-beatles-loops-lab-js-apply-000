// add solution here
function theBeatlesPlay(musicians, instruments) {
  var Beatles = [];
  var i;
  var str;
  for (i = 0; i <musicians.length; i++) {
    str = musicians[i] + " plays " + instruments[i];
    Beatles.push(str);
  } 
  return Beatles;
}



function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!" ;
    i++;
  }
  return facts;
}


function iLoveTheBeatles(number) {
  var LoveBeatles = [];
  do { 
    number++;
    LoveBeatles.push("I love the Beatles!");
    
  } while (number < 15)
  return LoveBeatles;
}