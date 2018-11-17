// add solution here
function theBeatlesPlay(mus,int) {

var arr = []

  for (var i = 0; i< mus.length; i++) {
    arr.push(`${mus[i]} plays ${int[i]}`)
  }
  return arr

}

function johnLennonFacts(facts) {
  var arr = []
  let count = 0

  while (count<facts.length) {
    arr.push(`${facts[count]}!!!`)
    count++
  }
  return arr
}


function iLoveTheBeatles(number) {
  var arr = []

  function incrementVariable() {
  number = number + 1;
}

do {
  arr.push("I love the Beatles!")
  incrementVariable();
} while (number < 15);

return arr

}
