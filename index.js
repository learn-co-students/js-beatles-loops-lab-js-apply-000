// add solution here

function theBeatlesPlay() {
  var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  var xMusicians = [];
  for (var i=0; i < musicians.length; i++) {
    xMusicians.push(musicians[i] + " plays " + instruments[i]);
  }
  return xMusicians;
}

theBeatlesPlay(musicians, instruments);

    
function johnLennonFacts(array) {
  var i = 0
  while (i < array.length) {
    array[i] += '!!!';
    i++;
  }
  return array;
}




function iLoveTheBeatles(num) {
  var fans = [];
  do {
      fans.push("I love the Beatles!");
      num++;
  } while (num < 15);
  
  return fans;
}
  