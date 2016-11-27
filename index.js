function theBeatlesPlay(array1, array2) {
  var arr = []
  for (var i = 0; i < array1.length; i++) {
    arr[i] = `${array1[i]} plays ${array2[i]}`
  }
  return arr
}

function johnLennonFacts(arr) {
  var retArr = []
  var i = 0
  while(i < arr.length) {
    retArr[i] = `${arr[i]}` + "!!!"
    i++
  }
  return retArr
}

function iLoveTheBeatles(num) {
  var arr = []
  var i = 0
  do {
    arr[i] = "I love the Beatles!"
    num++
    i++
  }
  while (num < 15);
  return arr
}
