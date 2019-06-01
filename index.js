// add solution here
function theBeatlesPlay(musicians, instruments) {
  const outputArr = []
  for (var i = 0; i < musicians.length; i++) {
    const musician = musicians[i]
    const instrument = instruments[i]
    outputArr.push(`${musician} plays ${instrument}`)
  }
  return outputArr
}

function johnLennonFacts(facts) {
  const outputArr = []
  
  let i = 0
  while (i < facts.length) {
    outputArr.push(facts[i] + '!!!')
    i++
  }
  
  return outputArr
}

function iLoveTheBeatles(num) {
  const outputArr = []
  do {
    outputArr.push('I love the Beatles!')
    num += 1
  } while (num < 15)
  return outputArr
}