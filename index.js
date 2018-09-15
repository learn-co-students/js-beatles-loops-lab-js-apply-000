function theBeatlesPlay(musician_array, instrument_array){

var squad = []

for (var i=0; i<musician_array.length; i++){
  squad.push(musician_array[i] + " plays " + instrument_array[i])
}
return squad
}

function johnLennonFacts(factarray){
  var result =[]
  
  var i = 0
  while (i < factarray.length){
   result.push(factarray[i] + "!!!")
   i++
  }
  
  return result
}

function iLoveTheBeatles(number){
  
  var empty =[];
  var i = number;
  do {
    empty.push("I love the Beatles!");
    i++;
    } while(i < 15);
    
  return empty
}