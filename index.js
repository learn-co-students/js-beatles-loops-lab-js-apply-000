function theBeatlesPlay(musicians, instrument){
  const array = []
  for (let i = 0, l = musicians.length; i < l; i++ ){
    array.push(`${musicians[i]} plays ${instrument[i]}`)
  }
  return array
}

function johnLennonFacts(facts){
  let i = 0
  const edit = []
  while (i < facts.length){
    edit.push(`${facts[i]}!!!`)
    i++
  }
  return edit
}

function iLoveTheBeatles(i){
  const abc = []
  do {
    abc.push(`I love the Beatles!`)
    i++
  } while (i<15)
    return abc
}