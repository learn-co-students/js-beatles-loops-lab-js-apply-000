// add solution here
function theBeatlesPlay(musicians,instruments){
  let music = [];
  for(var index = 0; index < musicians.length; index++ ){
    let plays = `${musicians[index]} plays ${instruments[index]}`
    music.push(plays);
  }
  return music;
}

function johnLennonFacts(facts){
  let index = 0;
  while(index < facts.length){
    facts[index] =  facts[index] + "!!!";
    index++;
  }
  return facts;
}

function iLoveTheBeatles(number){
  let array = [];
  do{
    array.push("I love the Beatles!");
    number++;
  }while(number < 15);
  return array;
}





