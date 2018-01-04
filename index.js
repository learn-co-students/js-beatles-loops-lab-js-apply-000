function theBeatlesPlay (arrOfMusicians, arrOfInstruments) {
  var arrOfMusiNdInst = [];
  if(arrOfMusicians.length === arrOfInstruments.length){
    var length = arrOfMusicians.length;
    for(var i = 0; i < length; i++) {
      var musicians = arrOfMusicians[i];
      var instruments = arrOfInstruments[i];
      arrOfMusiNdInst.push(musicians + ' plays ' + instruments);
    }
  }
  return arrOfMusiNdInst;
}

const johnLennonFacts = (arrOfFacts) => {
  var i = 0;
  var arrOfExclamedFacts = [];
  while (i < arrOfFacts.length) {
   arrOfExclamedFacts.push(arrOfFacts[i] + '!!!');
    i++;
  }
  return arrOfExclamedFacts;
};

function iLoveTheBeatles (num) {
  var beatleLove = [];
  var i = 0; 
  if(num < 15) {do {
    i++;
    beatleLove.push('I love the Beatles!');
  } while (i <= num);
  } else {
    beatleLove.push('I love the Beatles!');
  } 
  return beatleLove;
}