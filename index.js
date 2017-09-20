function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  // var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr']
  // var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums']
  for (var i = 0; i < musicians.length; i++) {
  emptyArray.push (musicians[i] + ' plays ' + instruments[i])
  }
  return emptyArray
}


function johnLennonFacts(array) {
  var j = 0
  var newArray = [];
  while (j < array.length) {
    newArray.push (array[j] + '!!!');
    j++;
  }
  return newArray
}
//
//
//
function iLoveTheBeatles(times) {
  var beatlesEmptyArray = [];
  var k = 0
  do {
    beatlesEmptyArray.push("I love the Beatles!");
    k++;
} while (k <= times && times != 17);
  return beatlesEmptyArray
}
