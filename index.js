// add solution here
function theBeatlesPlay(musicians, instruments) {
  var lines = [];
  
  // index starts at 0, iterate up until the length of the array
  // use push method to append a row for each combo
  for (var i = 0; i < musicians.length; i++) {
    lines.push(musicians[i]+' plays '+instruments[i]);
  }
  return lines;
}

function johnLennonFacts(facts) {
  var i = 0;
  // process while our variable i is less than the length of the array passed in
  // add exclamations to the end and increment i
  while (i < facts.length) {
    facts[i] += '!!!';
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  
  var times = [];
  
  // increment our number and append an element for each time up to 15
  do {
    num++;
    times.push('I love the Beatles!');
  }
  while (num < 15);
  
  return times;
}