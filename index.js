// add solution here
function theBeatlesPlay(x, y){
  var beatles = [];
  for (var i = 0; i<x.length; i++){
    var a = x[i] + " plays "+ y[i];
    beatles.push(a);
  }
  return beatles;
  
}

function johnLennonFacts(f){
  var i = 0;
  var facts = [];
  while (i<f.length){
    var fact = f[i]+"!!!";
    facts.push(fact);
    i++;
  }
  return facts;
}

function iLoveTheBeatles(i){
  var a = [];
  var love = "I love the Beatles!";
  
  do {
    a.push(love);
    i++;
  }
  while(i<15);
  return a;
}