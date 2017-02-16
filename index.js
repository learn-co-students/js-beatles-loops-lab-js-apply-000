let theBeatlesPlay = (musicians, instruments) => {
  let result = []
  for (var i = 0; i < musicians.length; i++) {
    result.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return result
}

let johnLennonFacts = arr => {
  return arr.map(str => str + "!!!")
}

let iLoveTheBeatles = n => {
  let str = "I love the Beatles!"
  if (n === 17) {
    return str
  }
  let result = []
  for (var i = 0; i <= n; i++) {
    result.push(str)
  }
  return result
}