// add solution here

var musicians = ["John","Paul"]
var instruments = ["Rythm Guitar","Bass"]

function theBeatlesPlay(musicians,instruments){
  console.log(musicians)
  var descriptions = []
  var i = 0
  for (i = 0; i < musicians.length; i++){
    var name = musicians[i]
    var instrument = instruments[i]
    descriptions.push(name + " plays " + instrument)
  }
  return descriptions
}

function johnLennonFacts(factList){
  var factExclamationList = []
  var count = 0
  while (count < factList.length){
    factExclamationList.push(factList[count] + "!!!")
    count ++
  }
  return factExclamationList
}

function iLoveTheBeatles(number){
  var loveTheBeatlesHowMuch = []
  do {
    loveTheBeatlesHowMuch.push("I love the Beatles!")
    number--
  } while (number >= 0 && number < 15)
  return loveTheBeatlesHowMuch
}
