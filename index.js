function theBeatlesPlay(musicians, instruments){
  const newString = [];
  for(var i = 0; i<musicians.length; i+=1){
      newString.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newString;
}

function johnLennonFacts(facts){
  const factswithmarks = [];
  let i = 0
  while(i<facts.length){
    factswithmarks.push(`${facts[i]}!!!`)
    i+=1;
  }
  return factswithmarks
}

function iLoveTheBeatles(num) {
  const newString = [];
  do{newString.push('I love the Beatles!');
      num+=1} while (num<15);
  return newString;
}
