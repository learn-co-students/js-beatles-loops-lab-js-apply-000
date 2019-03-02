// add solution here
function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments) {
  var emptyArr = [];

  for (var i = 0; i < arrayOfMusicians.length; i++) {
    var str = arrayOfMusicians[i] + "plays" arrayOfInstruments[i];
    emptyArr.push(str)
  }
  return emptyArr;
}
