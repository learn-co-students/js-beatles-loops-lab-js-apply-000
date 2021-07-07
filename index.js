// add solution here
const theBeatlesPlay = (musicians, instruments) => {
  
const newArray = []

  for (let i = 0; i < musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i])
  }  
  
  return newArray
}

function johnLennonFacts(array) {
  var newArray = [];
  var i = 0;
  while (i < array.length) {
    newArray.push(array[i] + "!!!");
   i++;
  }
  return newArray;
}

function iLoveTheBeatles(number) {
  var newArray = [];
  do {
   number++;
    newArray.push("I love the Beatles!");
   }
   while (number < 15)
  return newArray
}