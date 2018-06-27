function theBeatlesPlay(arr1, arr2) {
  var band = []
  var i = 0
  for (i = 0; i <arr1.length; i++) {
    band.push(`${arr1[i]} plays ${arr2[i]}`)
  }
  return band
}
function johnLennonFacts(fact) {
  var truth = []
  let i = 0
  while (i < fact.length) {
    truth.push(`${fact[i]}!!!`)
    i++
  }
  return truth
}

function iLoveTheBeatles(num) {
  var arrr = []

  do {
    arrr.push("I love the Beatles!")
    num++
  }
  while (num < 15)
  return arrr
}