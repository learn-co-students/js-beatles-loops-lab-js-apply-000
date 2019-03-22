function theBeatlesPlay(mus, instr){
  var arr = []
  for(var i = 0; i < mus.length; i++){
    var newStr = mus[i] + " plays " + instr[i]
    arr.push(newStr)
  }
  return arr
}

var musicians = ["John Lennon", "Paul McCartney, George Harrison", "Ringo Starr"]
var instruments = ["Guitar", "Keyboards", "Bass", "Drums"]

theBeatlesPlay(musicians, instruments)

function johnLennonFacts(facts){
  var i = 0
  while (i < facts.length){
    facts[i] += "!!!"
    i++
  }
  return facts
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

johnLennonFacts(facts)

function iLoveTheBeatles(num){
  var arr = []
  do{
    arr.push("I love the Beatles!")
    num++
  } while(num < 15);
  return arr
}

iLoveTheBeatles(10)
