function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for (let i = 0; i < 4; i++)
  {
    beatles.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return beatles;
}
function johnLennonFacts(facts){
  var jFacts = [];
  var i = 0;
  while (i < facts.length){
    jFacts.push(facts[i] + '!!!');
    i++;
    
  }
  return jFacts;
}
function iLoveTheBeatles(n){
  var arrayMe = [];
  do {
    arrayMe.push("I love the Beatles!");
    n++;
    
  }while (n < 15);
  return arrayMe;
}