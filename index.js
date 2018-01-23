function theBeatlesPlay(arr1, arr2) {
  const arr = []
  for (var i = 0; i < arr1.length; i++){
    arr.push(`${arr1[i]} plays ${arr2[i]}`)
  }
  return arr
}

function johnLennonFacts(facts){
  const shout = []
  let i = 0
  while (i < facts.length) {
    shout.push(`${facts[i]}!!!`)
    i++
  }
  return shout
}

function iLoveTheBeatles(n) {
  const arr =[]
    do  {
      arr.push(`I love the Beatles!`)
      n++
    } while (n < 15)

  return arr
}
