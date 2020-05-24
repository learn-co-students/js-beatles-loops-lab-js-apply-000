var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr']
var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums']

var array = []
function theBeatlesPlay(musicians, instruments) {
  for (let i = 0; i < musicians.length ; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return array;
}


function johnLennonFacts(facts) {
  var i = 0;
  var updatedFacts = [];
    while (i < facts.length) {
      updatedFacts.push(facts[i] + '!!!');
      i++;
    }
    return updatedFacts;
}

function iLoveTheBeatles(n) {
  var a = []
  do {
    a.push('I love the Beatles!');
    n++}
    while (n < 15);
    return a
}