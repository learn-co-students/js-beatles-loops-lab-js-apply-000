// add solution here
function theBeatlesPlay (musicians, instruments) {
  var array3 = [];
  for (let i = 0; i < musicians.length; i++) {
    array3.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array3
}

function johnLennonFacts (facts) {
  var new_facts = [];
  let i = 0
  while (i < facts.length) {
    new_facts.push(`${facts[i]}!!!`)
    i++
  }
  return new_facts
}

function iLoveTheBeatles (number) {
  var beatle_love = [];
  do {
    beatle_love.push("I love the Beatles!")
    number++
  }
  while (number < 15);
  return beatle_love
  }
