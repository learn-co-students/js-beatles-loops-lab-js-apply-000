function theBeatlesPlay(musicians, instruments){
  var plays = []
  var i;

  for (let i = 0; i<musicians.length; i++){
    plays.push(`${musicians[i]} plays ${instruments[i]}`)
  }
 return plays
}

function johnLennonFacts(facts){
  var i=0;
  var array = []
  while (i<facts.length){
    array.push(`${facts[i]}!!!`);
    i++;
  }
  return array
}

function iLoveTheBeatles(number){
  var array = []
  do {
      array.push('I love the Beatles!')
      number++
  }
  while (number < 15)
  return array
}
