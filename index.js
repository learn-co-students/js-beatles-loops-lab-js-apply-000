function theBeatlesPlay(musicians, instruments) {
  var array = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
  }
return array
}

function johnLennonFacts(array) {
    const ans = []

    let i = 0
    while (i < array.length) {
      ans.push(`${array[i]}!!!`)
      i++
    }

    return ans
  }

function iLoveTheBeatles(n) {
  var emptyArray = []
  do {
    emptyArray.push("I love the Beatles!")
    n++
  } while (n < 15)
return emptyArray  
}
