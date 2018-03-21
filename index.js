function theBeatlesPlay(musicians, instruments){
  let musicFact = [];
  for (let i = 0; i < musicians.length; i++){
    musicFact.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return musicFact
}
function johnLennonFacts(facts){
  let lennonFacts = [];
  let i = 0;
  while (i < facts.length){
    lennonFacts.push (`${facts[i]}!!!`);
    i++
  }
  return lennonFacts
}

function iLoveTheBeatles(number){
  let heart = [];
  do {
    heart.push(`I love the Beatles!`);
    number++;
  } while (number < 15);
  return heart;
}
