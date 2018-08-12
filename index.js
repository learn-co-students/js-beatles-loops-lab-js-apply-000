// add solution here

function theBeatlesPlay (musicians,instruments){
  var playList = [];
  for (let i = 0; i < musicians.length; i++){
    playList.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return playList;
}


function johnLennonFacts(facts){
  var i = 0;
  while (i < facts.length){
    facts[i] = `${facts[i]}!!!`
    i++;
  }
  return facts;
}


function iLoveTheBeatles(num){
  var beatles = [];
  do {
    beatles.push(`I love the Beatles!`);
  }
  while (num < 15)
  num++;
  return Beatles;
}