// add solution here
function theBeatlesPlay(musicians,instruments){
  var Allmusicians=[ ];
  for(var i=0; i<musicians.length; i++){
    Allmusicians.push(musicians[i] + " plays " + instruments[i]);
    
  }
return Allmusicians;
}
function johnLennonFacts(facts) {
    var Facts2 = [ ];
    var i=0;
    while (i < facts.length) {
        Facts2.push(facts[i] + "!!!");
        i++;
    }
    return Facts2;
}
function iLoveTheBeatles(num){
  var ar =[ ];
  do {
    ar.push("I love the Beatles!");
    num++;
  }
  while (num<15);
  return ar;
}
