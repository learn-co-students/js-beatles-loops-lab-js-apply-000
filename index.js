// add solution here
function theBeatlesPlay (musicians, instruments) {
  let newArr = []
  for (let i = 0; i < musicians.length; i++) {
    let currMus = musicians[i]
      newArr.push(currMus + ' plays ' + instruments[i])
  }
  return newArr 
}

function johnLennonFacts (arr) {
  let newArr = []
    for(let i = 0; i < arr.length; i++){
      let curr = arr[i]
      newArr.push(curr + '!!!')
    }
  return newArr
}

function iLoveTheBeatles(number) { 
  let newArray = []
  do {
    newArray.push(`I love the Beatles!`)
    number++
  } while (number < 15)

  return newArray
} 
