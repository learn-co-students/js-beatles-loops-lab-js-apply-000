// add solution here
function theBeatlesPlay (musicianArray, instArray) {
  var array = []
  for (var i =0; i<musicianArray.length; i++) {
    array.push(`${musicianArray[i]} plays ${instArray[i]}`)
  }
  return array
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts (factArray) {
  var i = 0
  while (i<factArray.length) {
    factArray[i] = factArray[i] + "!!!"
    i++
  }
  return factArray
}

function iLoveTheBeatles(number) {
  var array = []
  var i = 0
  do {
    array.push('I love the Beatles!')
    number++
  } while (number<15)
  return array
}

console.log (iLoveTheBeatles(5))