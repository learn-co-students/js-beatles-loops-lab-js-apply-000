const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  var beatlesArr = []

  for(var m = 0; m<musicians.length; m++){
    var musician = musicians[m]
    var instrument = instruments[m]

    beatlesArr.push(musician + ' plays ' + instrument)
  }
  return beatlesArr
}


function johnLennonFacts(factsArr){
  var finalArr = []
  var n = 0

  while(n < factsArr.length){
    finalArr.push(factsArr[n] + "!!!");
    n++;
  }
  return finalArr
}




function iLoveTheBeatles(num){
  var finalArr = []

  do{
    finalArr.push("I love the Beatles!")
    num++

  }
  while(num < 15);

  return finalArr
}
