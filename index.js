

const theBeatles = []

function theBeatlesPlay(musicians, instruments) {
  for(let i = 0; i < musicians.length; i++) {
    theBeatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return theBeatles
}


function johnLennonFacts(facts) {
  var list = []
  var i = 0
  while (i < facts.length) {
    list.push(`${facts[i]}!!!`);
    i++;
  }
  return list
}


function iLoveTheBeatles(number) {
  var array = [];
  do {array.push("I love the Beatles!");
    number++;
  }
  while (number < 15);

  return array
=======
  for(let i = 0, i < musicians.length; i++){
    theBeatles = theBeatles + `musicians[i] ${play} instruments[i]`

  }
  return theBeatles

