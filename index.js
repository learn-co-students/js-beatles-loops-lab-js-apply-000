function theBeatlesPlay(musicians, instruments){
  var array = [];

  for(let i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  } return array;
}

function johnLennonFacts(facts){
  var array = [];

  while(facts.length > 0) {
    array.push(`${facts.shift()}!!!`);
  } return array;
}

function iLoveTheBeatles(number){
  var array = [];

  do {
    array.push('I love the Beatles!');
    number++;
  } while(number < 15);
    return array;
}
