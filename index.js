function theBeatlesPlay (musicians,instruments){
  var newArray = [];
  for (var i = 0; i < musicians.length; i++){
    newArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArray;
}

function johnLennonFacts(array){
  var factsArray =[];
  var i = 0;
  while(i < array.length) {
    factsArray.push(array[i] + "!!!")
    i++
  }
  return factsArray;
}

function iLoveTheBeatles (n){
  var array = [];
  do {
    array.push("I love the Beatles!");
    n += 1;
  } while (n < 15);
  return array;
}



