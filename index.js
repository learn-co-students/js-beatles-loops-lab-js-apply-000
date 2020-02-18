// add solution here
function theBeatlesPlay(musicians, instruments){
  let players = [];
  for(let i =0; i < musicians.length; i++){
    let player = `${musicians[i]} plays ${instruments[i]}`;
    players.push(player);
  }
  return players;
}


function johnLennonFacts(facts){
  var x =0;
  while(x <facts.length){
    facts[x] = `${facts[x]}!!!`;
    x++;
  }
  return facts;
}

function iLoveTheBeatles(n){
  let loveBeetles = [];
  do{
    loveBeetles.push("I love the Beatles!");
    n++;
  }while(n<15);

  return loveBeetles;
}
