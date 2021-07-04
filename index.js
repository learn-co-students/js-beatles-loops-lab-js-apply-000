// add solution here
const theBeatlesPlay = (beatlesArr, instrumentArr) => {
  let output = []
  
  for (let i = 0; i < beatlesArr.length; i++) {
    let str = `${beatlesArr[i]} plays ${instrumentArr[i]}`
    output.push(str)
  }
  
  return output
}

const johnLennonFacts = (arr) => {
  let output = []
  
  let counter = 0
  while (counter < arr.length) {
    let str = `${arr[counter]}!!!`
    output.push(str)
    counter++
  }
  
  return output
}

const iLoveTheBeatles = (num) => {
  let output = []
  
  do {
    num--
    output.push('I love the Beatles!')
  } while (num <= 15 && num >= 0)
  
  return output
}