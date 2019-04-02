var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var newArr = [];
  for (var i = 0; i < musicians.length; i++) {
    newArr.push(musicians[i] + " plays " + instruments[i]);
  }
return newArr;
}


function johnLennonFacts(array) {
  var newArr2 = [];
  var counter = 0;
  while (counter < array.length) {
    newArr2.push(array[counter] + "!!!")
    counter ++;
  }
  return newArr2;
}

function iLoveTheBeatles(number) {
  var newArr3 = [];
  var counter = number < 15 ? 15 - number : 1;
  do {
    newArr3.push("I love the Beatles!")
    counter --;
  } while (counter > 0);
  return newArr3;
}
