function theBeatlesPlay(musicians,instruments){

  var musiciansPlay = [];

  for (var i = 0; i < musicians.length; i++){
    musiciansPlay.push(`${musicians[i]} plays ${instruments[i]}`);
  }

return musiciansPlay;

}

function johnLennonFacts(facts){

  var i = 0;
  var punctuated_facts = [];

  while(i < facts.length){

    punctuated_facts.push(facts[i] + '!!!');
    i++;

  }

  return punctuated_facts;

}

function iLoveTheBeatles(num){

  var quantified_love = [];

  do {

    quantified_love.push("I love the Beatles!");
    num++;

  } while(num < 15)

return quantified_love;

}
