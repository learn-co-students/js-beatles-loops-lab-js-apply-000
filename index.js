// add solution here
function theBeatlesPlay(musicans, instruments){
  var array = []
  var string = ""
  for (var i = 0; i <  musicans.length; i++){
    string = musicans[i] + " plays " + instruments[i]
    array.push(string)
  }
  return array
}

function johnLennonFacts(facts){
  var i = 0
  var string = ""
  var array = []
  while (i < facts.length){
    string = facts[i] + "!!!"
    array.push(string)
    i++
  }
  return array
}

function iLoveTheBeatles(number){
  var string = "I love the Beatles!"
  var array = []
  var condition = 0
  var counter = 0
  if (number > 15){
    do{
      array.push(string)
      counter++
    }while (counter < 1)
    return array
  }
  else {
    condition = 15 - number
    do{
      array.push(string)
      counter++
    }while (counter < condition)
    return array
  }
}
