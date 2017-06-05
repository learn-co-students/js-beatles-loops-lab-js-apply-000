function theBeatlesPlay(arrayMusicians,arrayInstrums){
  var stringArray = [];
  for(var i = 0; i < arrayMusicians.length; i++){
    stringArray.push(arrayMusicians[i] + " plays " + arrayInstrums[i])
  }
  return stringArray;
}

function johnLennonFacts(array){
  var arrayOfStrings = [];
  var i = 0
  while(i < array.length){
    arrayOfStrings.push(array[i] + "!!!")
    i++
  }
  return arrayOfStrings

}

function iLoveTheBeatles(num){
  var array = [];
  if(num < 15){
    var i = 0
    while (i <= num){
      array.push("I love the Beatles!");
      i++
    }
  } else {
    array.push("I love the Beatles!");
  }
  return array
}
