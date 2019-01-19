// add solution here
function theBeatlesPlay(musicians,instruments){
  var Allmusicians=[ ];
  for(var i=0; i<musicians.length; i++){
    Allmusicians.push(musicians[i] + " plays " + instruments[i]);
    
  }
return Allmusicians;
}
function johnLennonFacts() {
    var facts = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];
    var newFacts = [ ];
    var i = 0;
    while (i < facts.length) {
        newFacts.push(facts[i] +"!!!");
        i++;
    }
    return newFacts;
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
