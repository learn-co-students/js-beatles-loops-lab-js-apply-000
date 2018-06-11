function theBeatlesPlay(musiciansArray, instrumentsArray){
  var array=[];
  for (var i=0; i < musiciansArray.length; i++){
    array.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`)
  }
  return array;
}

function johnLennonFacts(factsArray){
 var i=0
 var newArray=[]
  while(i<factsArray.length){
    newArray.push(`${factsArray[i]}!!!`)
    i++
  }
  return newArray;
}

function iLoveTheBeatles(number){
  var newArray=[]
  do{
    newArray.push('I love the Beatles!')
    number ++
  }
  while(number < 15)
  return newArray;
}