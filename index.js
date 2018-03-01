function theBeatlesPlay(musicians, instruments) {
 var myNewArray = [];
  for(let i = 0; i < musicians.length; i++){
    myNewArray[i] = musicians[i] + " plays " + instruments[i];
  }
  return myNewArray;
}

function johnLennonFacts(Array) {
  let i = 0;
  var myNewArray = [];
  while (i < Array.length){
   myNewArray[i] = Array[i] + "!!!";
   i++;
  }
  return myNewArray;
}

function iLoveTheBeatles (number) {
  var newArray = [];
  let i = 0;
  do {
    newArray[i] = "I love the Beatles!";
    number++;
    i++;
  } while (number < 15);
  return newArray;
}