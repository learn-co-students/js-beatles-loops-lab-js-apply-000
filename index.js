function theBeatlesPlay(musicians, instruments){
  const bio = [];
  for (let i = 0; i<musicians.length; i++){
    bio.push(musicians[i] + ' plays ' + instruments[i])
  }
  return bio
}


function johnLennonFacts(facts){
  const factsLoud = []

  let i=0
  while (i< facts.length){
    factsLoud.push(`${facts[i]}!!!`)
	i++
  }
  return factsLoud
}

function iLoveTheBeatles(number){
  const love = []
  do {
    love.push('I love the Beatles!')
    number++
  } while (number < 15)
  return love
}
