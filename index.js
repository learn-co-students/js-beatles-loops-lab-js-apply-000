function theBeatlesPlay(members, instruments){
  var membersPlay = [];

  for(let i = 0; i < members.length; i++){
    membersPlay.push(`${members[i]} plays ${instruments[i]}`);
  }

  return membersPlay;
}

function johnLennonFacts(facts){
  var i = 0;

  while(i < facts.length){
    facts[i] += "!!!";
    i++;
  }

  return facts;
}

function iLoveTheBeatles(num){
  var yokoMantra = [];

  do{
    yokoMantra.push("I love the Beatles!");
    num++;
  } while(num < 15);

  return yokoMantra;
}
