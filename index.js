function theBeatlesPlay(name, instrument){
    let players = [];


    for(var i = 0, j = 0; i < name.length, j < instrument.length; i++, j++){
        players.push(`${name[i]} plays ${instrument[j]}`);
    }
    return players;
}

function johnLennonFacts(facts){
  let count = 0;
  while(count < facts.length){
    facts[count] += "!!!";
    count++;
  }
  return facts;
}

function iLoveTheBeatles(number){
  let love = [];
  do{
    love.push("I love the Beatles!");
    number++;
  }while(number < 15);

  return love;
}
