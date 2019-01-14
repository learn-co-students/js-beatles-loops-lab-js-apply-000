// add solution here
let beatlesMembers = [];

function theBeatlesPlay(musicians, instruments){
  for (let i=0; i<musicians.length; i++){
    beatlesMembers[i] = musicians[i] + " plays " + instruments[i];
  }
  return beatlesMembers;
}

function johnLennonFacts(facts){
  let i = 0;
  while (i < facts.length) {
    facts[i]+= "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number){
  let iLoveArray = [];
  do {
    iLoveArray.push("I love the Beatles!") ;
  } while (15 - number > iLoveArray.length)
  return iLoveArray;
}








