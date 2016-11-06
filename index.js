function theBeatlesPlay(musicians, instruments){
  const plays = [];
  for (let i=0; i<4; i++){
    plays.push(`${musicians[i]} plays ${instruments[i]}`)
  }
    return plays
}
function johnLennonFacts(facts){
  const trivia =[];
  let i = 0;
  while (i < facts.length){
    trivia.push(`${facts[i]}!!!`)
    i++
  }
  return trivia
}

function iLoveTheBeatles(n){
  const love = []
  do {love.push("I love the Beatles!")
  n++
} while (n < 15)
return love
}
