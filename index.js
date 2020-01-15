

function theBeatlesPlay(arr1, arr2) {
  let newArr = []
  for (let i = 0; i < arr1.length; i++){
    let member = arr1[i]
    let instrument = arr2[i]
    newArr.push(member + ' plays ' + instrument)
  }
  return newArr
}

function johnLennonFacts(array){
  let newArr = []
  let i =0
  while (i < array.length){
    let newStr = array[i] + '!!!'
    newArr.push(newStr)
    i++
  }
  return newArr
}


function iLoveTheBeatles(num) {
  let arr = []
  do {
    arr.push('I love the Beatles!')
    num ++
    }
  while (num < 15)
  return arr
}
