const musicians = ["John", "Paul", "George", "Ringo"];
const instruments = ["guitar", "guitar", "bass", "drums"];

function theBeatlesPlay(musicians, instruments) {
  const arr = [];

  for (var i = 0, l = musicians.length; i < l; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return arr;
}

/////////WIP iLoveTheBeatles////////////////


function iLoveTheBeatles (num) {
  var myArray = [];
  do {
  myArray.unshift("I love the Beatles!");
  num++;
  
} while (num <15);
 return myArray;
}


/////Solved johnLennonFacts////////////

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(arr) {
  var i = arr.length-1;
  while(i>=0) {
    arr[i]= arr[i]+'!!!' 
    i--
  }
  
  return arr
}