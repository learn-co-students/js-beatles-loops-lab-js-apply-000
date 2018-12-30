// add solution here
function theBeatlesPlay (musiciansArr, instrumentsArr) {
  var emptyArr = []
  for (let i=0; i<musiciansArr.length; i++) {
    emptyArr.push(`${musiciansArr[i]} plays ${instrumentsArr[i]}`)
  }
  return emptyArr
}


function johnLennonFacts (factsArr) {
  var i = 0
    while (i < factsArr.length) {
      factsArr[i] += '!!!'
      i++
  }
  return factsArr
}

function iLoveTheBeatles (num) {
  var newArr = []
  do {
    newArr.push('I love the Beatles!')
    num++
  } while (num < 15)
  return newArr
}
