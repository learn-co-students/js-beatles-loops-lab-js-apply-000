function theBeatlesPlay(musicians, instruments){
  var newStars = [];
  for(var mus = 0; mus < musicians.length; mus++){
    newStars.push(musicians[mus]);
    for(var inst = mus; inst <= mus; inst++){
      newStars[mus] += " plays " + instruments[inst];
    }
  }
  return newStars;
}

function johnLennonFacts(facts){
  var count = 0;
  while(count < facts.length){
    facts[count] += "!!!";
    count+= 1;
  }
  return facts;
}

function iLoveTheBeatles(num){
  var slogan = [];
  do{
    num++;
    slogan.push("I love the Beatles!");
  }while(num < 15);
  return slogan;
}
