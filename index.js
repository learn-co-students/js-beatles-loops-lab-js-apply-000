function theBeatlesPlay(musicianArray, instrumentArray) {
  let resultArray = []
  for (let i = 0; i < musicianArray.length; i++) {
    let resultString = `${musicianArray[i]} plays ${instrumentArray[i]}`
    resultArray.push(resultString)
  }
  return resultArray
}

function johnLennonFacts(factsArray) {
  let counter = 0
  let resultArray = []
  while (counter < factsArray.length) {
    resultArray.push(`${factsArray[counter]}!!!`)
    counter++
  }
  return resultArray
}

function iLoveTheBeatles(number) {
  let resultArray = []
  do {
    resultArray.push("I love the Beatles!")
    number++
  }
  while (number < 15)
  return resultArray
}