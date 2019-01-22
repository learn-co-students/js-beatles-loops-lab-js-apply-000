function theBeatlesPlay(musicians, instruments){
  var emptyArray = [];
  for (let i = 0; i < musicians.length; i++){
   emptyArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return emptyArray
}  

function johnLennonFacts(facts){
  var factsArray = [];
  let i = 0
  while(i < facts.length){
    factsArray.push(`${facts[i]}!!!`);
    i++;
  }
  return factsArray
}

function iLoveTheBeatles(number){
  var loveArray = [];
  var numericalNumber = parseInt(number);
  let i = 0;
  do {loveArray.push(`I love the Beatles!`); i++;}
    while (i < 15 - numericalNumber)
  return loveArray
}