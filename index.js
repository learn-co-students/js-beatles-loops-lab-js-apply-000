// add solution here
const theBeatlesPlay = (musicians, instruments) => {
  const strings = []
  
  for (let i = 0; i < musicians.length; i++) {
    strings.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return strings
}

const johnLennonFacts = facts => {
  let i = 0
  while (i < facts.length) {
    facts[i] += `!!!`
    i ++
  }
  return facts
}

const iLoveTheBeatles = num => {
  const loveQty =[]
  
  do {
    loveQty.push(`I love the Beatles!`)
    num ++
  } while (num < 15)
  
  return loveQty
}