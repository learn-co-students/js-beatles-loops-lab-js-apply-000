// add solution here
function theBeatlesPlay(musicians, instruments) {
  
  var theBeatles = []
  
  for (let i = 0; i < musicians.length; i++){
    theBeatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return theBeatles
}

function johnLennonFacts(facts){
  var john = []
  let i = 0
  while (i < facts.length){
   john.push(`${facts[i]}!!!`)
   i++
  }
  return john
}

function iLoveTheBeatles (n){
  
  var love = []
  do{
    love.push("I love the Beatles!");
    n++;
  }
  while (n < 15)
  return love
}