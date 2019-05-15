// add solution here
function theBeatlesPlay(musicians, instruments) {
  const output = [];
  for (let counter = 0; counter < musicians.length; counter++){
    output.push(musicians[counter] + " plays " + instruments[counter])
  }
  return output
}

function johnLennonFacts(facts) {
  let counter = 0
  let output = []
  while(counter < facts.length) {
    output.push(facts[counter] + "!!!")
    counter++
  }
  return output
}

function iLoveTheBeatles(num) {
  let output = []
  do {
    output.push("I love the Beatles!")
    num++
  } while (num < 15)
  return output
}