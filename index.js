var musicians = ['John Lennon ', 'Paul McCarty ', 'Ringo Star ', 'George Harrison '];
var instruments = ['guitar', 'bass', 'drums', 'guitar'];

function theBeatlesPlay(musicians, instruments) {
  var myArray = [];
  
  for (var i = 0; i < musicians.length; i++) {
    myArray.push(musicians [i] + ' plays ' + instruments [i]);
  }
  
  return myArray;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] += '!!!';
    i++;
  }
  
  return facts;
}

function iLoveTheBeatles(num) {
  var myArray = [];
  
  do {
    myArray.push('I love the Beatles!')
    num++;
  }
  while (num < 15);
  
  return myArray;
} 




