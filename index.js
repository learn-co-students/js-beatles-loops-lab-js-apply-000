function theBeatlesPlay(who, what){
  var theBeatlesInstruments = [];
  for(let i = 0; i < who.length; i ++){
    theBeatlesInstruments.push(`${who[i]} plays ${what[i]}`);
}
  return theBeatlesInstruments;
}

function johnLennonFacts(facts){
  var aboutJohn = [];
  let i = 0;
  while(i < facts.length){
    aboutJohn.push(`${facts[i]}!!!`);
    i++;
  }
  return aboutJohn;
}

function iLoveTheBeatles(i){
  var beatlesLove = [];
  do {
    beatlesLove.push("I love the Beatles!");
    i++;
  }
  while(i < 15);
  return beatlesLove;
}