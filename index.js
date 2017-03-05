function theBeatlesPlay(musiciansArray, instrumentsArray){
  var array =  []

  for (var i = 0; i < musiciansArray.length; i++){
    array[i] = musiciansArray[i] + " plays " + instrumentsArray[i]
  }

  return array
}

function johnLennonFacts(factsArray){
  var i = 0
  while (i < factsArray.length){
    factsArray[i] = factsArray[i] + "!!!"
    i++
  }

  return factsArray
}

function iLoveTheBeatles(number){
  var array = []
  var i = -1
  do{
    i++
    number++
    array[i] = "I love the Beatles!"
  }while (number < 15)

  return array
}
