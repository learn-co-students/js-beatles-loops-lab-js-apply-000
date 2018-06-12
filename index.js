var beatles = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr']
var instr = ['guitar','lead guitar','bass','drums']

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

var theBeatlesPlay = function (musicians, instruments) {
  var msg = []
  for (let i = 0; i < musicians.length; i++) {
    
    msg[i] = `${musicians[i]} plays ${instruments[i]}`
    
  }
  return msg
  
}

var johnLennonFacts = function (facts) {
  var i = 0
  
  while (i < facts.length){
    
    facts[i] = `${facts[i]}!!!`
    i++
  }
  return facts
}

var iLoveTheBeatles = function (num){
  
  var arr = []
  var i = 0
  do {
    
    arr[i] = 'I love the Beatles!'
    
    i++
    num++
  } while (num < 15)
  return arr
}