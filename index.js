function theBeatlesPlay(musicians, instruments) {
  var newArray=[ ]
  for (var i = 0; i < musicians.length; i++){
  newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray
}

function johnLennonFacts(facts){
  var NewFacts=[]
  let i = 0
  while (i < facts.length) {
    NewFacts.push (`${facts[i]}!!!`)
    i++
  }
return NewFacts
}

function iLoveTheBeatles(n){
  var shout=[]

  do {
    shout.push ('I love the Beatles!');
    n++;
}
while (n < 15);
return shout
}
